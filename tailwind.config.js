/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '768px',
            md: '1100px',
            lg: '1440px',
            xl: '1920px'
        },
        fontFamily: {
            sans: ['sans-serif'],
            serif: ['serif']
        },
        extend: {
            spacing: {
                128: '32rem',
                144: '36rem'
            },
            borderRadius: {
                '4xl': '2rem'
            }
        }
    },
    plugins: []
}
