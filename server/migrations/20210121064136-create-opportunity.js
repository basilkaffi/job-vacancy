'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Opportunities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CompanyId: {
        type: Sequelize.INTEGER
      },
      CandidateId: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      bussiness_type: {
        type: Sequelize.STRING
      },
      product: {
        type: Sequelize.STRING
      },
      opportunity_reason: {
        type: Sequelize.STRING
      },
      profit: {
        type: Sequelize.STRING
      },
      resource: {
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
    return queryInterface.dropTable('Opportunities');
  }
};