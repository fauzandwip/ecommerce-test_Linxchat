const axios = require('axios');
const { writeFile } = require('node:fs/promises');

const getProducts = async () => {
	try {
		const { data } = await axios.get('https://dummyjson.com/products');
		return data;
	} catch (error) {
		console.log(error);
	}
};

const writeProducts = async () => {
	try {
		const response = await getProducts();
		const mappedProducts = response.products.map((data) => {
			const { title, description, price, stock, brand, category, thumbnail } =
				data;
			return { title, description, price, stock, brand, category, thumbnail };
		});
		// console.log(JSON.stringify(mappedProducts));
		await writeFile(
			__dirname + '/products.json',
			JSON.stringify(mappedProducts)
		);
	} catch (error) {
		console.log(error);
	}
};

writeProducts();
