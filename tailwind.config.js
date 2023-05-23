/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                skyblue: "#afdfff",
                mypurple: "#baaeff",
                mygreen: "#aeffb6",
                myblack: "#0f0f0f",
            },
        },
    },
    plugins: [],
};
