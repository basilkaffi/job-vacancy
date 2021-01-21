'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    company_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    contact: DataTypes.STRING,
    bussiness_type: DataTypes.STRING,
    about: DataTypes.TEXT,
    image_url: DataTypes.STRING,
    varified: DataTypes.BOOLEAN
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
  };
  return Company;
};