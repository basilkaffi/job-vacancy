'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aims = sequelize.define('Aims', {
    CandidateId: DataTypes.INTEGER,
    aims_number: DataTypes.STRING,
    musi_number: DataTypes.STRING,
    musi_code: DataTypes.STRING,
    musi_description: DataTypes.STRING,
    branch_code: DataTypes.STRING,
    branch_name: DataTypes.STRING,
    tanzeem: DataTypes.STRING
  }, {});
  Aims.associate = function(models) {
    // associations can be defined here
  };
  return Aims;
};