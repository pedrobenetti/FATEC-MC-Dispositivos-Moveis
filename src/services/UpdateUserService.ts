import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";
interface IUserRequest{      
    id: string;
    name: string;             
    admin?: boolean;           
    password: string;          
}

class UpdateUserService{
    async execute({id, name, admin = false, password}: IUserRequest) {   

        if(!name){
            throw new Error('Name required!');
        }

        if(!password){
            throw new Error('Password required!');
        }

        const usersRepositories = getCustomRepository(UsersRepositories);

        const userAlreadyExists = await usersRepositories.findOne({
            id,
        });

        if(!userAlreadyExists){
            throw new Error ("User not found!");
        }

        const passwordHash = await hash(password, 8);
        userAlreadyExists.name = name;
        userAlreadyExists.admin = admin;
        userAlreadyExists.updated_at = new Date();
        userAlreadyExists.password = passwordHash;

        return await usersRepositories.update(id, userAlreadyExists).then(f => {
            return userAlreadyExists;
        }, err => {
            throw new Error ("Failed to update!")
        });
    }
}

export { UpdateUserService };