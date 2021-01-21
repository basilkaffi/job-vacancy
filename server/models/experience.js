'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('Experience', {
    CandidateId: DataTypes.INTEGER,
    company: DataTypes.STRING,
    position: DataTypes.STRING,
    start_year: DataTypes.DATEONLY,
    end_year: DataTypes.DATEONLY,
    still_working: DataTypes.BOOLEAN
  }, {});
  Experience.associate = function(models) {
    // associations can be defined here
  };
  return Experience;
};