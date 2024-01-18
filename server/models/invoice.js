'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Invoice extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Invoice.init(
		{
			userId: DataTypes.INTEGER,
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
