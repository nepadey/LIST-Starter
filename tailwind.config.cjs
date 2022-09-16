/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/views/**/*.{html,js,svelte,ts}",
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],

    theme: {
        extend: {}
    },

    plugins: [
        require('flowbite/plugin')
    ],
    darkMode: 'class',
}
