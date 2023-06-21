'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require ('sequelize');
const Users = require('./users-model')
const DATABASE_URI = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};

const sequelize = new Sequelize(DATABASE_URI, DATABASE_CONFIG);


module.exports = {
    db: sequelize,
    Users: Users(sequelize,DataTypes),
    
}