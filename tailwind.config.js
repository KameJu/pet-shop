/** @type {import('tailwindcss').Config} */

const constants = {
	primary: '#FDE047',
	'primary-dark': '#ceb63e',
	gray: '#423F3F',
	'dark-gray': '#302f2f',
	white: '#FFF',
	black: '#000',
	red: '#F23C3D'
}

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			...constants
		},
		extend: {}
	},
	plugins: []
}
