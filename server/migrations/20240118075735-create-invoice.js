'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Invoices', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			UserId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Users',
					key: 'id',
				},
			},
			orderId: {
				type: Sequelize.STRING,
			},
			orderStatus: {
				type: Sequelize.STRING(20),
			},
			paymentStatus: {
				type: Sequelize.STRING(20),
				defaultValue: 'unpaid',
			},
			transactionToken: {
				type: Sequelize.STRING,
			},
			expiredTransaction: {
				type: Sequelize.DATE,
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
		await queryInterface.dropTable('Invoices');
	},
};
