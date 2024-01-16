import RegisterForm from '../components/RegisterForm';

const Register = () => {
	return (
		<div className="w-full h-screen py-8 px-8 md:py-20 md:px-20 bg-green-primary">
			<div className="w-full h-full flex flex-row ">
				<div className="w-full md:w-1/2 h-full px-4 md:px-10 flex items-center justify-center rounded-2xl md:rounded-e-none md:rounded-s-2xl backdrop-blur-lg bg-opacity-70 bg-slate-100">
					<div>
						<RegisterForm />
					</div>
				</div>
				<div className="hidden md:flex w-1/2 h-full items-center justify-center rounded-e-2xl bg-contain bg-white backdrop-blur-xl">
					<h1 className="text-4xl font-bold text-green-primary">
						E-Commerce Linxchat
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Register;
