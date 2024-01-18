import { createBrowserRouter } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Products from '../pages/Products';
import Shipment from '../pages/Shipment';

const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				path: '',
				element: <Products />,
			},
			{
				path: '/checkout/:invoiceId',
				element: <Shipment />,
			},
		],
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/login',
		element: <Login />,
	},
]);

export default router;
