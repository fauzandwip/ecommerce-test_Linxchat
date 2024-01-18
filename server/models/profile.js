'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Profile extends Model {
		static associate(models) {
			Profile.belongsTo(models.User, { foreignKey: 'UserId' });
		}
	}
	Profile.init(
		{
			UserId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			phoneNumber: {
				type: DataTypes.STRING(20),
				allowNull: false,
				validate: {
					notNull: { msg: 'Phone Number is required' },
					notEmpty: { msg: 'Phone Number is required' },
				},
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: 'Address is required' },
					notEmpty: { msg: 'Address is required' },
				},
			},
		},
		{
			sequelize,
			modelName: 'Profile',
		}
	);
	return Profile;
};
