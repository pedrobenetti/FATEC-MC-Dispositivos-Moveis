const express = require('express'); //Equivalente ao using/import
const app = express(); //Carrega todos os dados express no objeto APP
app.use(express.json());

//Método GET serve para buscar uma informação que vem no formato de arquivo JSON
//Método POST para envio de requisição. Cadastro, login, etc.


//Rota 1 - PRODUCTS List - GET 
app.get("/products", (request, response) => {

    return response.json(
        [
            {
                "id": "1",
                "nome": "Caderno Pequeno",
                "image": "caderno.png",
                "categoria": "7",
                "descricao": "caderno universitario 40 folhas",
                "status": "Ativo"
            },
            {
                "id": "2",
                "nome": "Caderno Grande",
                "image": "caderno.png",
                "categoria": "7",
                "descricao": "caderno universitario 20 folhas",
                "status": "Ativo"
            }
        ]
    );
});

//Rota 2 - PRODUCTS Insert - Post 
app.post("/products", (request, response) => {
    const { nome, image, categoria, descricao, status } = request.body;

    min = Math.ceil(0);
    max = Math.floor(99);
    const id = Math.floor(Math.random() * (max - min)) + min;

    return response.json({ id, nome, image, categoria, status, descricao });
});

//Rota 3 - PRODUCTS Find by ID - GET 
app.get("/products/index/:id", (request, response) => {
    const id = request.params.id;
    console.log(id)
    return response.json(
        [{
            "id": "1",
            "nome": "Caderno Pequeno",
            "image": "caderno.png",
            "categoria": "7",
            "descricao": "caderno universitario 40 folhas",
            "status": "Ativo"
        }
        ]
    );
});

//Rota 4 - PRODUCTS Find by Name and CategId - GET
app.get("/products/list/", (request, response) => {
    console.log(request.query)
    const { name, categId } = request.query;
    console.log(name)
    console.log(categId)

    const id = 1
    const image = "imagem 1"
    const status = "ativo"
    const descricao = "Desc 01"

    var objeto = {
        id,
        name,
        image,
        categId,
        status,
        descricao
    }

    return response.json(objeto);
});

//Rota 5 - PRODUCTS Update - PUT
app.put("/products/:id", (request, response) => {
    const id = request.params.id;
    const body = request.body;
    console.log(id)
    const { nome, image, categoria, descricao, status } = request.body;
    var objeto = {
        id,
        nome,
        image,
        categoria,
        status,
        descricao
    }
    return response.json(objeto);
});
//Rota 6 - PRODUCTS Delete _ DELETE
app.delete("/products/:id", (request, response) => {
    const id = request.params.id;
    return response.json({ "message": "Produto Excluído com Sucesso" });
});

/* ::::::::::::::::::: Atividade da Aula ::::::::::::::::::: */
/*Criação das Rotas na API de exemplo com os seguintes critérios:

1- Cadastro de Categorias: 
Atributos :  id, nome, descrição
Métodos   :  incluir, excluir, pesquisar por nome, pesquisar por id, deletar

2- Cadastro Clientes:
Atributos :  id, nome, telefone, email, senha, cpf, endereço, cidade, estado , bairro
Métodos   :  incluir, excluir, pesquisar por nome, pesquisar por id, pesquisar por endereço ou cidade ou estado, deletar

3- Cadastro Vendas:
Atributos :  id, produto, cliente, quantidade, total bruto , desconto, valor total
Métodos   :  incluir, excluir , pesquisar venda por id,  pesquisar vendas por produto, pesquisar vendas por cliente, deletar
*/


const categorias = express();
categorias.use(express.json());


//Pesquisar por NOME
categorias.get("/nome/:nome", (request, response) => {

    const nome = request.params.nome;

    min = Math.ceil(0);
    max = Math.floor(99);
    const ID = Math.floor(Math.random() * (max - min)) + min;

    const descricao = "Texto para descrição do produto";

    response.json(
        {
            ID,
            nome,
            descricao
        });

}); //Deu certo

//Pesquisar por ID
categorias.get("/ID/:ID", (request, response) => {

    const ID = request.params.ID;

    const nome = "Pedro Benetti";

    const descricao = "Texto para descrição do produto";

    response.json(
        {
            ID,
            nome,
            descricao
        });

}); //Deu certo

//Adicionar categoria
categorias.post("/add", (request, response) => {
    const { ID, nome, descricao } = request.body;

    return response.json({ ID, nome, descricao });

});//Deu certo

//Excluir categoria
categorias.delete("/delete/:id", (request, response) => {
    const ID = request.params.id;
    return response.json({ "message": "Categoria Excluída com Sucesso" });
});// Deu certo



const clientes = express();
categorias.use(express.json());


//Pesquisar por nome
clientes.get("/nome/:nome", (request, response) => {

    id = "ABC";
    nome = request.params.nome;
    telefone = "123";
    email = "123";
    senha = "123";
    cpf = "123";
    endereco = "123";
    cidade = "123";
    estado = "123";
    bairro = "123";

    response.json({
        id,
        nome,
        telefone,
        email,
        senha,
        cpf,
        endereco,
        cidade,
        estado,
        bairro
    })

});//Deu certo

//Pesquisar por ID
clientes.get("/id/:id", (request, response) => {

    id = request.params.id;
    nome = "123";
    telefone = "123";
    email = "123";
    senha = "123";
    cpf = "123";
    endereco = "123";
    cidade = "123";
    estado = "123";
    bairro = "123";

    response.json({
        id,
        nome,
        telefone,
        email,
        senha,
        cpf,
        endereco,
        cidade,
        estado,
        bairro
    })

});//Deu certo

//Pesquisar por bairro
clientes.get("/bairro/:bairro", (request, response) => {

    id = "123";
    nome = "123";
    telefone = "123";
    email = "123";
    senha = "123";
    cpf = "123";
    endereco = "123";
    cidade = "123";
    estado = "123";
    bairro = request.params.bairro;

    response.json({
        id,
        nome,
        telefone,
        email,
        senha,
        cpf,
        endereco,
        cidade,
        estado,
        bairro
    })

});//Deu certo

//Adicionar cliente
clientes.post("/add", (request, response) => {
    const { id, nome, telefone, email, senha, cpf, endereço, cidade, estado , bairro } = request.body;

    return response.json({ id, nome, telefone, email, senha, cpf, endereço, cidade, estado , bairro });

});//Deu certo

//Excluir cliente
clientes.delete("/delete/:id", (request, response) => {
    const id = request.params.id;
    return response.json({ "message": "Cliente Excluído com Sucesso" });
});// Deu certo


const vendas = express();
vendas.use(express.json());

//Pesquisar por produto
vendas.get("/produto/:produto", (request, response) => {

    id = "30";
    produto = request.params.produto;
    cliente = "Pedro";
    quantidade = "2";
    total_bruto = "40";
    desconto = "7";
    valor_total = total_bruto - desconto;

    response.json(
        {
            id,
            produto,
            cliente,
            quantidade,
            total_bruto,
            desconto,
            valor_total
        });

}); //Deu certo

//Pesquisar por ID
vendas.get("/id/:id", (request, response) => {

    id = request.params.id;
    produto = "caderno";
    cliente = "Pedro";
    quantidade = "2";
    total_bruto = "40";
    desconto = "7";
    valor_total = total_bruto - desconto;

    response.json(
        {
            id,
            produto,
            cliente,
            quantidade,
            total_bruto,
            desconto,
            valor_total
        });

}); //Deu certo

//Pesquisar por Cliente
vendas.get("/cliente/:cliente", (request, response) => {

    id = "30";
    produto = "caderno";
    cliente = request.params.cliente;
    quantidade = "2";
    total_bruto = "40";
    desconto = "7";
    valor_total = total_bruto - desconto;

    response.json(
        {
            id,
            produto,
            cliente,
            quantidade,
            total_bruto,
            desconto,
            valor_total
        });

}); //Deu certo

//Adicionar venda
vendas.post("/add", (request, response) => {
    const { id, produto, cliente, quantidade, total_bruto, desconto, valor_total } = request.body;

    return response.json({ id, produto, cliente, quantidade, total_bruto, desconto, valor_total });

});//Deu certo

//Excluir venda
vendas.delete("/delete/:id", (request, response) => {
    const id = request.params.id;
    return response.json({ "message": "Venda Excluída com Sucesso" });
});// Deu certo

app.use('/vendas', vendas);
app.use('/clientes', clientes);
app.use('/categorias', categorias);
app.listen(3000);