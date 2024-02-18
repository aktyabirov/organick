/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true, 
      padding: '20px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1400px',
        
    }},
    extend: {
      colors: {
        'primary': '#274C5B',
        'mint-green': '#7EB693',
        'light-gray': '#D4D4D4',
        'off-white': '#F9F8F8',
        'mint-cream': '#EFF6F1',
        'slate-gray': '#525C60',
        'not-found': '#8FA8A8',
        'cream-yellow':'#EFD372',
        'whitish-grey':'#ECECEC',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        cursive: ['Yellowtail', 'cursive'],
      },
    },
  },
  plugins: [],
}