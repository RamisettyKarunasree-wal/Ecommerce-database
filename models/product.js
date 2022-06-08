'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category);
      this.belongsTo(models.Merchant);
      this.hasMany(models.Product_Images, {
        foreignKey: 'product_id',
      });
      this.hasMany(models.Cart_Item, {
        foreignKey: 'product_id',
      });
      this.hasOne(models.Order_Item, {
        through: 'Order_Items',
      });
    }
  }
  Product.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      quantity: DataTypes.NUMBER,
      price: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};

