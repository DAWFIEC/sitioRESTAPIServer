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

    const productos = await queryInterface.sequelize.query(
      `SELECT id from productos;`
    );

    const productosRows = productos[0];

    const ordenes = await queryInterface.sequelize.query(
      `SELECT id from ordenes;`
    );

    const ordenesRows = ordenes[0];

    await queryInterface.bulkInsert('orden_detalles', [
      {ordenId: ordenesRows[0].id, productoId: productosRows[1].id, createdAt: new Date(), updatedAt: new Date()},
      {ordenId: ordenesRows[1].id, productoId: productosRows[2].id, createdAt: new Date(), updatedAt: new Date()},
      {ordenId: ordenesRows[2].id, productoId: productosRows[3].id, createdAt: new Date(), updatedAt: new Date()},
      {ordenId: ordenesRows[0].id, productoId: productosRows[4].id, createdAt: new Date(), updatedAt: new Date()},
      {ordenId: ordenesRows[1].id, productoId: productosRows[5].id, createdAt: new Date(), updatedAt: new Date()},
      {ordenId: ordenesRows[2].id, productoId: productosRows[6].id, createdAt: new Date(), updatedAt: new Date()}
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('orden_detalles', null, {});
  }
};
