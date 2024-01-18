/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				green: {
					primary: '#3CB87E',
					secondary: '#44d693',
				},
			},
		},
	},
	plugins: [],
};
