/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                clifford: '#da373d',
                'bike-primary-color': 'rgb(231, 111, 81)',
            }
        },
    },
    plugins: [],
}