'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User);
      // define association here
    }
  }
  User_Card.init(
    {
      card_number: DataTypes.INTEGER,
      expiry_date: DataTypes.DATE,
      cvv_number: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User_Card',
    }
  );
  return User_Card;
};
