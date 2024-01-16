import { useState } from 'react';
import CustomInput from './CustomInput';
import SubmitButton from './SubmitButton';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

const RegisterForm = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		fullname: '',
		email: '',
		address: '',
		phoneNumber: '',
		password: '',
	});

	const handleOnRegister = async () => {
		try {
			navigate('/login');
		} catch (error) {
			console.log(error);
		}
	};

	function changeUser(e, key) {
		setUser((prev) => {
			return {
				...prev,
				[key]: e.target.value,
			};
		});
	}

	// console.log(user);
	return (
		<form className="w-full h-full py-2 flex flex-col justify-center items-center gap-2 transition-opacity">
			<h1 className="text-3xl font-bold text-green-700">Register</h1>
			<CustomInput
				id="fullName-form"
				label="Fullname"
				placeholder="Fullname"
				value={user.fullname}
				onChange={(e) => changeUser(e, 'fullname')}
			/>
			<CustomInput
				id="email-form"
				label="Email"
				type="email"
				placeholder="email@gmail.com"
				value={user.email}
				onChange={(e) => changeUser(e, 'email')}
			/>
			<div className="flex gap-4 items-end">
				<CustomInput
					id="phoneNumber-form"
					type="text"
					label="Number Phone"
					placeholder="ex: 6284319283921"
					value={user.phoneNumber}
					onChange={(e) => changeUser(e, 'phoneNumber')}
				/>
				<CustomInput
					id="password-form"
					type="password"
					label="Password"
					placeholder="password"
					value={user.password}
					onChange={(e) => changeUser(e, 'password')}
				/>
			</div>
			<label htmlFor="city" className="w-full flex flex-col gap-2 font-medium">
				Adress
				<textarea
					className="textarea w-full py-2 px-4 rounded-md focus:border-green-primary border-solid input input-bordered h-24 font-normal"
					value={user.address}
					onChange={(e) => changeUser(e, 'address')}
					placeholder="Tortuga, Switzerland"
				></textarea>
			</label>
			<div className="mt-5 w-full">
				<SubmitButton text="REGISTER" onClick={handleOnRegister} />
			</div>
			<label className="text-sm my-4">
				You have account?{' '}
				<Link
					to={'/login'}
					className=" text-green-primary font-bold hover:underline cursor-pointer"
				>
					Login Now
				</Link>
			</label>
		</form>
	);
};

export default RegisterForm;
