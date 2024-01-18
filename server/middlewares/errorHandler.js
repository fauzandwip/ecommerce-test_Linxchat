const errorHandler = (error, req, res, next) => {
	let status, message;
	switch (error.name) {
		case 'NotFound':
			status = 404;
			message = 'Not Found';
			break;
		default:
			break;
	}

	res.status(status).json({ message });
};

module.exports = errorHandler;
