import { classToPlain } from "class-transformer";

class ListUserService { 
    async execute() {

        const usersret = [{
            "id": "1",
            "nome": "Pedro Benetti", 
            "email": "pedrobenetti@outlook.com.br",
            "admin": "1",
            "password": "1234", 
            "status": "ativo"   
        },{
            "id": "2",
            "nome": "Andrea Benetti", 
            "email": "andreabenetti@outlook.com.br",
            "admin": "1",
            "password": "12345", 
            "status": "ativo"  

        }]

        return classToPlain(usersret);
    }
}

export { ListUserService };