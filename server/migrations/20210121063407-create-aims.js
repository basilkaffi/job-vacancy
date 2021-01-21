'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Aims', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CandidateId: {
        type: Sequelize.INTEGER
      },
      aims_number: {
        type: Sequelize.STRING
      },
      musi_number: {
        type: Sequelize.STRING
      },
      musi_code: {
        type: Sequelize.STRING
      },
      musi_description: {
        type: Sequelize.STRING
      },
      branch_code: {
        type: Sequelize.STRING
      },
      branch_name: {
        type: Sequelize.STRING
      },
      tanzeem: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Aims');
  }
};