'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.User_Card, {
        foreignKey: 'user_id',
      });
      this.hasMany(models.User_Address, {
        foreignKey: 'user_id',
      });
      this.hasOne(models.Cart, {
        foreignKey: 'user_id',
      });
      this.hasMany(models.Order, {
        foreignKey: 'user_id',
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};

