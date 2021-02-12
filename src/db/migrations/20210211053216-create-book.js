'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      writer_id: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: {
        //     tableName: 'writers'
        //   },
        //   key: 'id'
        // },
        // allowNull: false
      },
      category_id: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: {
        //     tableName: 'categories'
        //   },
        //   key: 'id'
        // },
        // allowNull: false
      },
      title: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};