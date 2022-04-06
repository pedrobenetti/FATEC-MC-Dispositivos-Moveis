import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController{
    async handle(request: Request, response: Response){
        const{id, name, admin, password} = request.body;

        const updateUserService = new UpdateUserService();
        
        const user = await updateUserService.execute({
            id,
            name, 
            admin, 
            password
        });

        return response.json(user);
    }
}

export { UpdateUserController };