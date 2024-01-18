const midtransClient = require('midtrans-client');
const { Invoice, Product, OrderItem, User, Profile } = require('../models');
const { nanoid } = require('nanoid');

class PaymentController {
	static async getMidtransToken(req, res, next) {
		try {
			console.log('trigerrr');
			const invoiceId = req.params.invoiceId;
			// console.log(invoiceId);
			const invoice = await Invoice.findByPk(invoiceId, {
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

			if (!invoice) {
				throw {
					name: 'NotFound',
					message: 'Invoice Not Found',
				};
			}

			// console.log(invoice);
			let snap = new midtransClient.Snap({
				isProduction: false,
				serverKey: process.env.MIDTRANS_SERVER_KEY,
			});

			const orderId = `trx-${invoice.id}-${nanoid()}`;
			let parameter = {
				transaction_details: {
					order_id: orderId,
					gross_amount: invoice.OrderItems[0].Product.price,
				},
				credit_card: {
					secure: true,
				},
				customer_details: {
					first_name: invoice.User.fullname,
					last_name: '',
					email: invoice.User.email,
					phone: invoice.User.Profile.phoneNumber,
				},
				item_details: [
					{
						price: invoice.OrderItems[0].Product.price,
						quantity: 1,
						name: invoice.OrderItems[0].Product.title,
						category: invoice.OrderItems[0].Product.category,
					},
				],
			};

			const transaction = await snap.createTransaction(parameter);
			console.log('transaction', transaction);
			res.status(200).send({ transaction_token: transaction.token, orderId });
		} catch (error) {
			next(error);
		}
	}
}

module.exports = PaymentController;
