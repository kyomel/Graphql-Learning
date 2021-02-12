'use strict';
const faker = require('faker');
faker.locale = "id_ID";

const writers = [...Array(10)].map((writer) => {
  return {
    full_name: faker.name.findName(),
    email: faker.internet.email(),
    photo: faker.image.image(),
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
   await queryInterface.bulkInsert("writers", writers);
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
