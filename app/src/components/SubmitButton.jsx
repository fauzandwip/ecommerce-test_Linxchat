import PropTypes from 'prop-types';
const SubmitButton = ({ text, onClick }) => {
	return (
		<button
			type="submit"
			className="py-2 px-6 w-full bg-gradient-to-r from-gray-600 to-green-primary rounded-lg text-lg font-bold text-slate-100"
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default SubmitButton;

SubmitButton.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
};
