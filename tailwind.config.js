/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // colors: {
      //  color1:'#f0fdf4',
      //  color2:'#dcfce7',
      //  color3:'#bbf7d0',
      //  color4:'#86efac',
      //  color5:'#4ade80',
      //   color6:'#22c55e',
      //   color7:'#16a34a',
      //   color8:'#15803d',
      //   color9:'#166534',
      //   color10:'#14532d',
      //   color11:'#052e16',
      // },
      colors:{
        color1:'#ecfdf5',
        color2:'#d1fae5',
        color3:'#a7f3d0',
        color4:'#6ee7b7',
        color5:'#34d399',
         color6:'#10b981',
         color7:'#059669',
         color8:'#047857',
         color9:'#065f46',
         color10:'#064e3b',
         color11:'#022c22',

      },
    },
  },
  plugins: [

    require('tailwindcss-animated')
  ],
  
  
};
