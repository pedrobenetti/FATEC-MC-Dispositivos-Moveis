import { hash } from "bcryptjs";
interface IUserRequest{        //
    name: string;              // Interface para definir o tipo dos dados que serão requistados do usuário.
    email: string;             // Isso impede que o user forneça uma palavra no campo de telefone, por exemplo.
    admin?: boolean;           //
    password: string;          
}

class CreateUserService{
    async execute({ name, email, admin = false, password}: IUserRequest) {
        
        if(email!){
            throw new Error('Email Incorrect!');
        }

        const passwordHash = await hash(password, 8);
        console.log(passwordHash);

        let vuser = {
            name: "Pedro", email: "email 2", admin: false, password: 1234
        }

        return vuser;
    }
/** 
 *
Método assíncrono chamado excute. Na primeira linha, recebe os dados listados na interface.
O IF serve para configurar o email sempre como incorreto, apenas para testes. Logo abaixo, um objeto para simular a entrada de 
valores das variáveis. 

O principal emprego dessa função será validar dados para evitar problemas como duplicidade de email, nomes 
repetidos, password com caracteres insuficientes, etc.

Toda chamada de criação de usuário deverá passar por essa autenticação antes de ir para a base de dados.
*
*/
}
export { CreateUserService };