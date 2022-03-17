interface IUserRequest{      
    id: number;
    name: string;             
    email: string;             
    admin?: boolean;           
    password: string;          
}

class UpdateUserService{
    async execute({id, name, email, admin = false, password}: IUserRequest) {
        
        if(!email){
            throw new Error("Email Incorrect!");
        }

        let vuser = {
           id: 1, name: "Pedro", email: "pedrobenetti@outlook.com.br", admin: false, password: 1234
        }

        return vuser;
    }

}
export { UpdateUserService };