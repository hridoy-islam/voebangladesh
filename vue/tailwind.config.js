/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        colors: {
            'primary': '#429349',
            'secondary': '#EE3D2B',

        },
    },
    
    plugins: [
        require('flowbite/plugin')
    ],
}

