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
      spacing: {
        '25px': '25px',
      },
      backgroundImage: {
        'after-header':
          "url('https://bizweb.dktcdn.net/100/431/449/themes/834425/assets/bg-after-header.png?1640335531122')",
        'before-footer':
          "url('https://bizweb.dktcdn.net/100/431/449/themes/834425/assets/bg-before-footer.png?1640335531122')",
      },
      gridRow: {
        'span-16': 'span 16 / span 16',
      },
      gridRowStart: {
        // 8: '8',
        // 9: '9',
        // 10: '10',
        // 11: '11',
        // 12: '12',
        // 13: '13',
      },
      animation: {
        slideL: 'slideL 500ms linear',
        slideR: 'slideR 500ms linear',
      },
      keyframes: {
        slideL: {
          '0%': {transform: 'translateX(-100%)'},
          '100%': {transform: 'translateX(0)'},
        },
        slideR: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0)'},
        },
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
}
