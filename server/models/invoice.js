'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Invoice extends Model {
		static associate(models) {
			Invoice.belongsTo(models.User, { foreignKey: 'UserId' });
			Invoice.hasMany(models.OrderItem, { foreignKey: 'InvoiceId' });
		}
	}
	Invoice.init(
		{
			UserId: DataTypes.INTEGER,
			orderId: DataTypes.STRING,
			orderStatus: DataTypes.STRING(20),
			paymentStatus: DataTypes.STRING(20),
			transactionToken: DataTypes.STRING,
			expiredTransaction: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'Invoice',
		}
	);
	return Invoice;
};
