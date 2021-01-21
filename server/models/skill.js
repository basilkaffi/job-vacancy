'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    CandidateId: DataTypes.INTEGER,
    skill_name: DataTypes.STRING
  }, {});
  Skill.associate = function(models) {
    // associations can be defined here
  };
  return Skill;
};