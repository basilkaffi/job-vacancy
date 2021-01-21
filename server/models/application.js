'use strict';
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('Application', {
    JobId: DataTypes.INTEGER,
    CandidateId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    notification: DataTypes.BOOLEAN
  }, {});
  Application.associate = function(models) {
    // associations can be defined here
  };
  return Application;
};