'use strict';
module.exports = (sequelize, DataTypes) => {
  const Opportunity = sequelize.define('Opportunity', {
    CompanyId: DataTypes.INTEGER,
    CandidateId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    bussiness_type: DataTypes.STRING,
    product: DataTypes.STRING,
    opportunity_reason: DataTypes.STRING,
    profit: DataTypes.STRING,
    resource: DataTypes.STRING
  }, {});
  Opportunity.associate = function(models) {
    // associations can be defined here
  };
  return Opportunity;
};