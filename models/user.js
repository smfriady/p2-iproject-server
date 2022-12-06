"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      userName: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: { msg: "username already registered" },
        validate: {
          notNull: { msg: "username is required" },
          notEmpty: { msg: "username is required" },
        },
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: { msg: "email already registered" },
        validate: {
          notNull: { msg: "email is required" },
          notEmpty: { msg: "email is required" },
          isEmail: { msg: "email is not valid" },
        },
      },
      profession: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notNull: { msg: "password is required" },
          notEmpty: { msg: "password is required" },
        },
      },
      role: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ["teacher", "student"],
        defaultValue: "student",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
