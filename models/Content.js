const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Content extends Model { }

Content.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  },
  {
    sequelize
  }
);

module.exports = Content;
