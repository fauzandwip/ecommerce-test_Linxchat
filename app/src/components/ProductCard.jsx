import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const ProductCard = ({ product }) => {
	const navigate = useNavigate();

	const handleOnBuy = async () => {
		try {
			const { data } = await api.post(
				`/invoice`,
				{
					productId: product.id,
				},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('access_token')}`,
					},
				}
			);
			console.log(data, 'create invoice');
			navigate(`/checkout/${data.invoiceId}`);
		} catch (error) {
			console.log(error.response.data.message);
		}
	};

	return (
		<div className="aspect-[4/5] p-3 shadow-lg flex flex-col justify-between rounded-lg bg-slate-200">
			<img
				src={product.thumbnail}
				alt="Product Image"
				className=" h-3/4 rounded-md"
			/>
			<div className="py-2 text-center">
				<h1 className="text-md font-medium">{product.title}</h1>
				<p className="text-sm">${product.price}</p>
			</div>
			<button
				onClick={handleOnBuy}
				className="w-full py-2 bg-green-700 text-slate-100 rounded-md active:bg-green-600"
			>
				BUY NOW
			</button>
		</div>
	);
};

export default ProductCard;

ProductCard.propTypes = {
	product: PropTypes.object,
};
