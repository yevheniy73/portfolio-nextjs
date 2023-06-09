/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#01080E',
        'primary-dark' : '#011221',
        'primary-blue' : '#011627',
        'secondary-purple': '#4D5BCE',
        'secondary-green': '#3C9D93',
        'secondary-gray': '#607B96',
        'secondary-white': '#fffff',
        'accent-orange': '#FEA55F',
        'accent-green': '#43D9AD',
        'accent-peach': '#E99287',
        'accent-lavender': '#C98BDF',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      screens: {

        'my-sm': '640px',
        // => @media (min-width: 640px) { ... }
        'my-md': '1475px',
        // => @media (min-width: 880px) { ... }
        'my-1320': '1320px',
        'my-755': '755px',
        'my-500': '500px'
      },
    },
  },
  purge: {
    options: {
      safelist: [
        'opacity-100',
        'opacity-80',
        'opacity-60',
      ],
    },
    // ...
  },
  plugins: [],
};
