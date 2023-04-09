/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {

            colors: {
                "accent": "var(--accent)",
                "bgrd": "var(--bgrd)",
                "bgrd-b": "var(--bgrd-b)",
                "gray": "var(--gray)"
            },
            fontFamily: {
                firaCode: ["var(--font-fira)"]
            }


        },
    },
    plugins: [],
}
