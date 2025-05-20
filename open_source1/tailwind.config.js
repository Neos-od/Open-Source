/** @type {import('tailwindcss').Config} */

module.exports={
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				"custom": "1000px"
			}
		}
	},
	plugins: []
}