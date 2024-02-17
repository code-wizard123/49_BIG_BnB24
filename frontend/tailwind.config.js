/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auctionPage': "url('frontend/public/7509867_3676796.jpg')"
      }
    },
  },
  plugins: [],
}

