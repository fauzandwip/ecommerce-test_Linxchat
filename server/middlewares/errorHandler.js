const errorHandler = (err, req, res, next) => {
	let status, message, messages;
	switch (err.name) {
		case 'SequelizeValidationError':
			status = 400;
			messages = err.errors.map((error) => error.message);
			break;
		case 'NotFound':
			status = 404;
			message = 'Not Found';
			break;
		case 'SequelizeUniqueConstraintError':
			status = 409;
			message = err.errors[0].message;
			break;
		default:
			break;
	}

	console.log(err);
	res.status(status).json(message ? { message } : { messages });
};

module.exports = errorHandler;
