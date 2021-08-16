'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const clientes = await queryInterface.sequelize.query(
      `SELECT id from clientes;`
    );
    
    const clientesRows = clientes[0]

    await queryInterface.bulkInsert('ordenes', [
      {fecha: new Date(), clienteId: clientesRows[0].id, createdAt: new Date(), updatedAt: new Date()},
      {fecha: new Date(), clienteId: clientesRows[1].id, createdAt: new Date(), updatedAt: new Date()},
      {fecha: new Date(), clienteId: clientesRows[2].id, createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ordenes', null, {});
  }
};
