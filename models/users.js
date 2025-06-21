"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          is: {
            args: "/^d{11}$",
            msg: "O CPF deve conter 11 dígitos númericos",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: { msg: "Email inválido" },
        },
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [6],
            msg: "A senha deve conter pelo menos 6 caracteres.",
          },
        },
      },
      tipo_usuario: {
        type: DataTypes.ENUM("locador", "locatario"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
