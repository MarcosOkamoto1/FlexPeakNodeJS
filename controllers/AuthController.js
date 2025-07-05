const { Users } = require("../models");
const jwt = require("jsonwebtoken");
require("dontenv").config();

module.exports = {
  async login(req, res) {
    const { email, senha } = req.body;

    try {
      const user = await Users.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ menssage: "Usuário não encontrado." });
      }
      const senhaValida = await user.senhaValidaa();
      if (!senhaValida) {
        return res.status(401).json({ menssage: "Senha Inválida" });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro no login ", error: error.message });
    }
  },
};
