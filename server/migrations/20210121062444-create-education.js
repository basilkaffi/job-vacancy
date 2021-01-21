'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Education', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CandidateId: {
        type: Sequelize.INTEGER
      },
      level: {
        type: Sequelize.STRING
      },
      major: {
        type: Sequelize.STRING
      },
      institution: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.FLOAT
      },
      entry_year: {
        type: Sequelize.DATEONLY
      },
      graduation_year: {
        type: Sequelize.DATEONLY
      },
      graduate: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Education');
  }
};