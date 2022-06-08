'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Product);
      this.belongsTo(models.Cart);
    }
  }
  Cart_Item.init(
    {
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Cart_Item',
    }
  );
  return Cart_Item;
};
