const { Invoice } = require('../models');

const getInvoiceAuthorization = async (req, res, next) => {
	try {
		const userId = req.user.id;
		const { id } = req.params;

		const invoice = await Invoice.findByPk(id);

		if (!invoice) {
			throw {
				name: 'NotFound',
				message: 'Invoice Not Found',
			};
		}

		if (userId !== invoice.UserId) {
			throw {
				name: 'Forbidden',
				message: `You don't have permission`,
			};
		}

		next();
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getInvoiceAuthorization,
};
