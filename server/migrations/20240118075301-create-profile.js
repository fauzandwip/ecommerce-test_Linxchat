'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Profiles', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			UserId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				unique: true,
				references: {
					model: 'Users',
					key: 'id',
				},
			},
			phoneNumber: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
			address: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Profiles');
	},
};
