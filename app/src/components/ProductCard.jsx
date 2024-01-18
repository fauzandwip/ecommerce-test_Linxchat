import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
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
			<button className="w-full py-2 bg-green-700 text-slate-100 rounded-md active:bg-green-600">
				BUY NOW
			</button>
		</div>
	);
};

export default ProductCard;

ProductCard.propTypes = {
	product: PropTypes.object,
};
