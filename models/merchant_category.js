'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchant_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category);
      this.belongsTo(models.Merchant);
      // define association here
    }
  }
  Order_Item.init(
    {
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Merchant_Category',
    }
  );
  return Merchant_Category;
};
