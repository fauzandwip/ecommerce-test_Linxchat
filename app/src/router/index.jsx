import { createBrowserRouter } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Products from '../pages/Products';

const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				path: '',
				element: <Products />,
			},
			{
				path: '/checkout',
				element: <div>checkout</div>,
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
