const { User, Profile } = require('../models');

class UserController {
	static async createUser(req, res, next) {
		try {
			const { email, password, fullname, phoneNumber, address } = req.body;
			// console.log({ email, password, fullname, phoneNumber, address });
			const user = await User.create({ email, password, fullname });
			await Profile.create({
				UserId: user.id,
				phoneNumber,
				address,
			});

			// console.log(user);
			res.status(201).json({ id: user.id, email });
		} catch (error) {
			next(error);
		}
	}
}

module.exports = UserController;
