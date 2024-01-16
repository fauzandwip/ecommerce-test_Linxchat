import PropTypes from 'prop-types';

const CustomInput = ({
	type = 'text',
	id,
	label,
	placeholder,
	value,
	onChange,
}) => {
	return (
		<label htmlFor={id} className="w-full flex flex-col gap-2 font-medium">
			{label}
			<input
				type={type}
				name="fullname"
				id={id}
				placeholder={placeholder}
				className="w-full py-2 px-4 rounded-md focus:border-green-primary border-solid input input-bordered font-normal"
				onChange={onChange}
				value={value}
			/>
		</label>
	);
};

export default CustomInput;

CustomInput.propTypes = {
	type: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
};
