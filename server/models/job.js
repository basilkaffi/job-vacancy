'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    qualification: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    CompanyId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Job.associate = function(models) {
    // associations can be defined here
  };
  return Job;
};