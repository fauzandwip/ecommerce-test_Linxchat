import { useState } from 'react';
import CustomInput from './CustomInput';
import SubmitButton from './SubmitButton';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

const LoginForm = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const handleOnLogin = async () => {
		try {
			navigate('/register');
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
			<h1 className="text-3xl font-bold text-green-700">Login</h1>
			<CustomInput
				id="email-form"
				label="Email"
				type="email"
				placeholder="email@gmail.com"
				value={user.email}
				onChange={(e) => changeUser(e, 'email')}
			/>
			<CustomInput
				id="password-form"
				type="password"
				label="Password"
				placeholder="password"
				value={user.password}
				onChange={(e) => changeUser(e, 'password')}
			/>
			<div className="mt-8 w-full">
				<SubmitButton text="LOGIN" onClick={handleOnLogin} />
			</div>
			<label className="text-sm my-4">
				Don&apos;t have account?{' '}
				<Link
					to={'/register'}
					className=" text-green-primary font-bold hover:underline cursor-pointer"
				>
					Create an account
				</Link>
			</label>
		</form>
	);
};

export default LoginForm;
