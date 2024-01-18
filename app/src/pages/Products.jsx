import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import api from '../api';

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const { data } = await api.get('/products');
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProducts();
	}, []);

	return (
		<div className="w-full min-h-screen p-20 bg-green-primary">
			<div className="w-full h-full grid grid-cols-5 gap-4">
				{products.map((product) => {
					return <ProductCard key={product.id} product={product} />;
				})}
			</div>
		</div>
	);
};

export default Products;
