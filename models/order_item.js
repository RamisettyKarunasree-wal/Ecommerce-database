'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Product);
      this.belongsTo(models.Order);
      this.belongsTo(models.Delivery);
      this.hasOne(models.Return, {
        foreignKey: 'order_item_id',
      });
      // define association here
    }
  }
  Order_Item.init(
    {
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order_Item',
    }
  );
  return Order_Item;
};

