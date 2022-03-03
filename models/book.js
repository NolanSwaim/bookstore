'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Book.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    authors: DataTypes.STRING,
    publisher: DataTypes.STRING,
    genre: DataTypes.STRING,
    pages_num: DataTypes.STRING,
    cover_image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
    timestamps:false,
    tableName:'books'
  });
  return Book;
};