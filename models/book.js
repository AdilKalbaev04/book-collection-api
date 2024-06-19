const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  publicationDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  genres: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  }
});

module.exports = Book;
