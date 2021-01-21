'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
    fullname: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    contact: DataTypes.STRING,
    gender: DataTypes.STRING,
    image_url: DataTypes.STRING,
    role: DataTypes.STRING,
    status: DataTypes.STRING,
    varified: DataTypes.BOOLEAN
  }, {});
  Candidate.associate = function(models) {
    // associations can be defined here
  };
  return Candidate;
};