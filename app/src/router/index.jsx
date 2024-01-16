import { createBrowserRouter } from 'react-router-dom';
import Register from '../pages/Register';

const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				path: '',
				element: <div>Home</div>,
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
]);

export default router;
