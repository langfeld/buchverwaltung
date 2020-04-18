module.exports = {
  important: true,
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1800px',
      '3xl': '2000px',
      '4xl': '2300px',
      '5xl': '2500px'
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
