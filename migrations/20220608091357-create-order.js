'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      total: {
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
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as: 'user_id',
        },
      },
      user_address_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'User_Addresses',
          key: 'id',
          as: 'user_address_id',
        },
      },
      order_status_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Order_Statuses',
          key: 'id',
          as: 'order_status_id',
        },
      },
      payment_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Payments',
          key: 'id',
          as: 'payment_id',
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  },
};

