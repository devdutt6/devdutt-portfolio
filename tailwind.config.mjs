/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        headline: 'Platypi, serif',
        pageTitle: 'Anton, sans-serif',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
