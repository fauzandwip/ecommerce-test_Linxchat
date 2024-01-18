'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Products', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.STRING,
			},
			price: {
				type: Sequelize.INTEGER,
			},
			stock: {
				type: Sequelize.INTEGER,
			},
			brand: {
				type: Sequelize.STRING(50),
			},
			category: {
				type: Sequelize.STRING(50),
			},
			thumbnail: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable('Products');
	},
};
