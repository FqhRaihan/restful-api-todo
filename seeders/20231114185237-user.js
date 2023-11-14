'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Agus Kasmiri",
        email: "agusk@gmail.com",
        username: "agus",
        password: "222",
      },
      {
        name: "Waluyo",
        email: "walu@gmail.com",
        username: "luyo",
        password: "133",
      },
      {
        name: "Adit karawita",
        email: "aditkara@gmail.com",
        username: "adit",
        password: "333",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
