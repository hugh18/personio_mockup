module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'yellow': '#ff0',
      'blue': '#D5F0F7',
      'grey': '#F4F7FF',
      'darkgrey': '#E5E5E5',
      'white': '#FFFFFF',
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      heading: ['Open Sans Condensed', 'serif'],
    },
    fontSize: {
      // text-xs = 12px
      'xs': '.75rem',
      // text-sm = 14px
      'sm': '.875rem',
      // text-alt = 15px
      'alt': '.938rem',
      // text-tiny = 16px
      'tiny': '1rem',
      // text-base = 18px
      'base': '1.125rem',
      // text-lg = 20px
      'lg': '1.25rem',
      // text-xl = 24px
      'xl': '1.5rem',
      // text-2xl = 28px
      '2xl': '1.75rem',
      // text-3xl = 32px
      '3xl': '2rem',
      // text-4xl = 38px
      '4xl': '2.375rem',
      // text-5xl = 40px
      '5xl': '2.5rem',
      // text-6xl = 56px
      '6xl': '3.5rem',
      // text-7xl = 64px
      '7xl': '4rem',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1240px',
      },
    },
    extend: {},
  },
  plugins: [],
}
