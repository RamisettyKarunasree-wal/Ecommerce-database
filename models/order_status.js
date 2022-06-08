'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order, {
        foreignKey: 'order_status_id',
      });
    }
  }
  Order_Status.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Order_Status',
    }
  );
  return Order_Status;
};

