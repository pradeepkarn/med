/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       prime:"#1E1D23",
       safron: "#B1834E",
       safronLight: "#dfc2ae"
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #DFC2AE, transparent)',
      },
      spacing: {
        'container': '100px', // Custom padding value for container
      },
    }
  },
  plugins: [],
}

