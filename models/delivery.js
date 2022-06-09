'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Delivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Order_Item, {
        foreignKey: 'delivery_id',
      });
    }
  }
  Delivery.init(
    {
      delivery_date: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Delivery',
    }
  );
  return Delivery;
};

