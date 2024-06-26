const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        secondaryBlue: "#c4e1ff",
        primaryBlue: "#27639d",
        
      },
      
      
    }
  },
  plugins: [],
};
