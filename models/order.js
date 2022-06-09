'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User);
      this.belongsTo(models.Order_Status);
      this.belongsTo(models.User_Address);
      this.belongsTo(models.Paymant);
      this.hasMany(models.Order_Item, {
        foreignKey: 'order_id',
      });
    }
  }
  Order.init(
    {
      total: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};

