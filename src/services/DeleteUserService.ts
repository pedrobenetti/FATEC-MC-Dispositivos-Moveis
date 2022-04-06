import { getCustomRepository, Repository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserDelete{ 
    id: string
}

class DeleteUserService{
    async execute({id}: IUserDelete){

        const usersRepositories = getCustomRepository(UsersRepositories);

        const userAlreadyExists = await usersRepositories.findOne({
            id,
        });

        if(!userAlreadyExists){
            throw new Error ("User not found!");
        }

        return await usersRepositories.delete(id).then(f => {
            let messagmsgeDelete = {
                message: "Register deleted successfully!"
            }

            return messagmsgeDelete;
            
        }, err=> {
            throw new Error ("Failed to delete!");
        });


        

        
    }
}

export { DeleteUserService }