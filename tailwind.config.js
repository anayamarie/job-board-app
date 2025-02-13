/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind to look in the src folder for your HTML, JS, and TS files
    ],
    theme: {
        extend: {
            colors: {
                "desaturated-dark-cyan": "hsl(180, 29%, 50%)",
                "light-grayish-dark-cyan-bg": "hsl(180, 52%, 96%)",
                "light-grayish-dark-cyan-tbl": "hsl(180, 31%, 95%)",
                "dark-grayish-dark-cyan": "hsl(180, 8%, 52%)",
                "very-dark-grayish-dark-cyan": "hsl(180, 14%, 20%)",
            },
        },
    },
    plugins: [],
};
