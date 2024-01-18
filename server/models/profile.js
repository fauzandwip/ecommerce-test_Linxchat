'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Profile extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Profile.belongsTo(models.User, { foreignKey: 'UserId' });
		}
	}
	Profile.init(
		{
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
			UserId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'Profile',
		}
	);
	return Profile;
};
