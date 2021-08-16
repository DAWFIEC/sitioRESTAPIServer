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
    for (let i = 0; i <10; i++) {
      await queryInterface.bulkInsert('Clientes', [{
          nombre: 'Nombre cliente '+i,
          apellido: 'Apellido cliente '+i,
          estado: true,
          fechaNacimiento: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
   }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Clientes', null, {});
  }
};
