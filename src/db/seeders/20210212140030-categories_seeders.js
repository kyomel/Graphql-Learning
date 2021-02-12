'use strict';
const faker = require('faker');
faker.locale = "id_ID";

const categories = [...Array(10)].map((categories) => {
  return {
    category: faker.commerce.product(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent()
  }
})
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
   await queryInterface.bulkInsert("categories", categories);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
