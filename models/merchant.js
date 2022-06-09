'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product, {
        foreignKey: 'merchant_id',
        as: 'products',
      });
      this.belongsToMany(models.Category, {
        through: 'Merchant_Category',
      });
    }
  }
  Merchant.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      mobile_number: DataTypes.INTEGER,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Merchant',
    }
  );
  return Merchant;
};

