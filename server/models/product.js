'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		static associate(models) {
			Product.hasMany(models.OrderItem, { foreignKey: 'ProductId' });
		}
	}
	Product.init(
		{
			title: DataTypes.STRING,
			description: DataTypes.STRING,
			price: DataTypes.INTEGER,
			stock: DataTypes.INTEGER,
			brand: DataTypes.STRING(50),
			category: DataTypes.STRING(50),
			thumbnail: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Product',
		}
	);
	return Product;
};
