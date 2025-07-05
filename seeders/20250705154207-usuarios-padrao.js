'use strict';
const bcrypt = require('bcrypt');
const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hash = async (senha) => bcrypt.hash(senha,10)

    const usuarios = [{
      nome: 'admin',
      cpf: '00000000000',
      email: 'admin@ifpk.com.br',
      tipo_usuario: await hash('admin'),
      createdAt: new Date(),
      updatedAt: new Data()
  }
]
await queryInterface.buildInsert('Users', usuarios, {})
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.buildInsert('Users', null, {})
  }
};
