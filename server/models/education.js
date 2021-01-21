'use strict';
module.exports = (sequelize, DataTypes) => {
  const Education = sequelize.define('Education', {
    CandidateId: DataTypes.INTEGER,
    level: DataTypes.STRING,
    major: DataTypes.STRING,
    institution: DataTypes.STRING,
    score: DataTypes.FLOAT,
    entry_year: DataTypes.DATEONLY,
    graduation_year: DataTypes.DATEONLY,
    graduate: DataTypes.BOOLEAN
  }, {});
  Education.associate = function(models) {
    // associations can be defined here
  };
  return Education;
};