'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.hasOne(models.Profile);
		}
	}
	User.init(
		{
			email: {
				type: DataTypes.STRING(50),
				unique: { msg: 'Email already exists' },
				allowNull: false,
				isEmail: true,
				validate: {
					notNull: { msg: 'Email is required' },
					notEmpty: { msg: 'Email is required' },
				},
			},
			password: {
				type: DataTypes.STRING(15),
				allowNull: false,
				validate: {
					len: {
						args: [5, 15],
						msg: 'Password must be between 5 and 15 characters',
					},
					notNull: { msg: 'Password is required' },
					notEmpty: { msg: 'Password is required' },
				},
			},
			fullname: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Fullname is required' },
					notEmpty: { msg: 'Fullname is required' },
				},
			},
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};
