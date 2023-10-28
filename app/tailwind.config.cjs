/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'dotgothic16': ['DotGothic16'],
        'bungee-shade': ['Bungee Shade'],
      },
    },
  },
  plugins: [],
}
