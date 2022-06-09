'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order_Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
          as: 'product_id',
        },
        order_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Orders',
            key: 'id',
            as: 'order_id',
          },
        },
        delivery_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Deliveries',
            key: 'id',
            as: 'delivery_id',
          },
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Order_Items');
  },
};

