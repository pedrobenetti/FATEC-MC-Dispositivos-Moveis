import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"; 

interface IUserRequest{        
    name: string;              // Interface para definir o tipo dos dados que serão requistados do usuário.
    email: string;             // Isso impede que o user forneça uma palavra no campo de telefone, por exemplo.
    admin?: boolean;           
    password: string;          
}

class CreateUserService{
    async execute({ name, email, admin = false, password}: IUserRequest) {
        
        const UserRepository = getCustomRepository(UsersRepositories);

        if(!email){
            throw new Error('Email required!');
        }

        if(!name){
            throw new Error('Name required!');
        }

        if(!password){
            throw new Error('Password required!');
        }

        const userAlreadyExists = await UserRepository.findOne({
            email,
        });

        if (userAlreadyExists){
            throw new Error ("User already exists!")
        }

        const passwordHash = await hash(password, 8);

        const user = UserRepository.create({
            name,  
            email,
            admin,
            password: passwordHash,
        });

        await UserRepository.save(user);

        return user;
    }
/** 
 *
Método assíncrono chamado excute. Na primeira linha, recebe os dados listados na interface.
Logo abaixo, um objeto para simular a entrada de 
valores das variáveis. 

O principal emprego dessa função será validar dados para evitar problemas como duplicidade de email, nomes 
repetidos, password com caracteres insuficientes, etc.

Toda chamada de criação de usuário deverá passar por essa autenticação antes de ir para a base de dados.
*
*/
}
export { CreateUserService };