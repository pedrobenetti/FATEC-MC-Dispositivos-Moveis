import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad{
    sub: string;
}

export function ensureAuthenticated( request: Request, response: Response, next: NextFunction){
    
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");
    console.log(token);

    try{
        const { sub } = verify(
            token,
            "4f93ac9d10cb751b8c9c646bc9dbccb9"
        )as IPayLoad;

        //request.user_id = sub;

        return next();
    }catch(err){
        return response.status(401).end();
    }
}