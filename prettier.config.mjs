/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
    endOfLine: 'lf',
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    jsxSingleQuote: true,
    tabWidth: 4,
    plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
