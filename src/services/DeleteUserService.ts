import { classToPlain } from "class-transformer";
import { json } from "express";

interface IUserDelete{ 
    id: string
}

class DeleteUserService{
    async execute({id}: IUserDelete){

        console.log(id);
        let messagmsgeDelete = {
            message: "Registro excluído com sucesso"
        }

        return messagmsgeDelete;
    }
}

export { DeleteUserService }