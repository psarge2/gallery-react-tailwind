const tailwindcss = require('tailwindcss');

module.exorts = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}