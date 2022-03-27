module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hocs/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-3ba66b': '#3ba66b',
        'orange-#ffb416': '#ffb416',
        'orange-#F14E18': '#F14E18',
        'red-#eb3e32': '#eb3e32',
      },
      borderRadius: {
        '10px': '10px',
        '25px': '25px',
      },
      // spacing: {
      //   '25px': '25px',
      // },
    },
  },
  plugins: [],
}
