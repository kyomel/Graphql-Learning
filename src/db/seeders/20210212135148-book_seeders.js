'use strict';
const faker = require('faker');
faker.locale = "id_ID";

const books = [...Array(10)].map((book) => {
  return {
    writer_id: faker.random.number({
      'min': 1,
      'max': 10,
    }),
    category_id: faker.random.number({
      'min': 1,
      'max': 10,
    }),
    title: faker.random.number({
      'min': 1,
      'max': 10,
    }),
    description: faker.commerce.productDescription(),
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
   await queryInterface.bulkInsert("books", books);
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
