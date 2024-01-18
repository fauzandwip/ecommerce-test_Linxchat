const {
	sequelize,
	Product,
	Invoice,
	OrderItem,
	User,
	Profile,
} = require('../models');

class InvoiceController {
	static async createInvoice(req, res, next) {
		const t = await sequelize.transaction();
		try {
			const userId = req.user.id;
			const { productId } = req.body;
			const product = await Product.findByPk(productId);
			console.log(userId);
			// console.log(product, productId);

			if (!product) {
				throw {
					name: 'NotFound',
					message: 'Product Not Found',
				};
			}

			if (product.stock === 0) {
				throw {
					name: 'BadRequest',
					message: 'Empty Stock',
				};
			}

			const newInvoice = await Invoice.create(
				{ UserId: userId },
				{ transaction: t }
			);
			console.log(
				'🚀 ~ InvoiceController ~ createInvoice ~ newInvoice:',
				newInvoice
			);
			await OrderItem.create(
				{
					InvoiceId: newInvoice.id,
					ProductId: productId,
					quantity: 1,
				},
				{ transaction: t }
			);

			await t.commit();
			res.status(201).send({ invoiceId: newInvoice.id });
		} catch (error) {
			await t.rollback();
			next(error);
		}
	}

	static async getInvoiceById(req, res, next) {
		try {
			const { id } = req.params;

			const invoice = await Invoice.findByPk(id, {
				include: [
					{
						model: OrderItem,
						include: {
							model: Product,
						},
					},
					{
						model: User,
						attributes: { exclude: ['password'] },
						include: {
							model: Profile,
						},
					},
				],
			});

			res.status(200).send(invoice);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = InvoiceController;
