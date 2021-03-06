'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User);
      this.hasMany(models.Order, {
        foreignKey: 'user_address_id',
      });
    }
  }
  User_Address.init(
    {
      line1: DataTypes.STRING,
      line2: DataTypes.STRING,
      city: DataTypes.STRING,
      pincode: DataTypes.INTEGER,
      mobile_number: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User_Address',
    }
  );
  return User_Address;
};

