const { Users } = require("../models");
const { Op, where } = require("sequelize");

module.exports = {
  async createUser(req, res) {
    try {
      const { nome, cpf, email, senha, tipo_usuario } = req.body;
      if (!["locador", "locatario"].includes(tipo_usuario)) {
        return res.status(400).json({
          message: 'Tipo de usuário inválido. Use "Locador" ou "Locatario"',
        });
      }
      const emailExistente = await Users.findOne({ where: { email } });
      if (emailExistente) {
        return res.status(400).json({
          message: "Email já cadastrado!",
        });
      }
      const user = Users.create({ nome, cpf, email, senha, tipo_usuario });
      const { senha: _, ...userSemSenha } = user.toJSON();
      return res.status(201).json(userSemSenha);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao criar usuário ", error: error.message });
    }
  },
  async getAllUsers(req,res){
    try{
        const users = await Users.findAll({
            attributes: {exclude:['senha']}
        })
        return res.json(users)
    }
    catch (error) {
        return res
          .status(500)
          .json({ message: "Erro ao buscar usuário ", error: error.message });
      }
},
async getUserById(req,res){
    try{
        const {id} = req.params 
        const user = await Users.findByPk(id, {
            attributes: {exclude:['senha']}
        })
        if (!user){
            return res.status(404).json({message: "Usuário não encontrado."})
        }
        return res.json(user)
    }
    catch (error) {
        return res
          .status(500)
          .json({ message: "Erro ao buscar usuário ", error: error.message });
      }
 
},
async findByEmail(req,res){
    try{
        const {email} = req.query
        if(!email){
            return res.status(400).json({message: "Informar o Email na query"})
        } 
        const user = await Users.findOne({
            where:{email},
            attributes: {exclude:['senha']}
        })
        if (!user){
            return res.status(404).json({message: "Usuário não encontrado."})
        }
        return res.json(user)
    }
    catch (error) {
        return res
          .status(500)
          .json({ message: "Erro ao buscar usuário ", error: error.message });
      }
 
},
async findByName(req,res){
    try{
        const {nome} = req.query
        if(!nome){
            return res.status(400).json({message: "Informar o nome na query"})
        } 
        const users = await Users.findAll({
            where:{[Op.like]: `%${nome}%`},
            attributes: {exclude:['senha']}
        })
        if (!users.length === 0){
            return res.status(404).json({message: "Nenhum usuário não encontrado."})
        }
        return res.json(user)
    }
    catch (error) {
        return res
          .status(500)
          .json({ message: "Erro ao buscar usuário ", error: error.message });
      }
 
}

};
