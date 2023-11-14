'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Todos", [
      {
        value: "Kangkung",
        status: false,
      },
      {
        value: "Jeruk",
        status: false,
      },
      {
        value: "Sepatu Adidas",
        status: false,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Todos", null, {});
  }
};
