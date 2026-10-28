const con = required('../config/db.js')

const cadastrar = async ({nome, cpf, email, senha}) => {
    const {nome,cpf,email,senha} = req.body;

    const[result] = await con.query(
        "INSERT INTO usuarios VALUES (DEFAULT, ?, ?, ?, ?);",
        [nome, cpf,email,senha]
    );

    return{
        id: result.insertId,
        nome: nome,
        cpf: cpf,
        email: email
    }
}

const listar = (req,res) => {

}

const buscar = (req,res) => {

}

const apagar = (req, res) =>{

}

const atualizar = (req,res) =>{

}

const alterar = (req,res) =>{

}

module.exports = {
    cadastrar,
    listar,
    buscar,
    apagar,
    atualizar,
    alterar
}