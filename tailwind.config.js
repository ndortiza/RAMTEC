module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sen': ['Sen', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'sans-serif'],
    },
    extend: {
      colors : {
        primero: '#45A183',
        segundo: '#1C5441',
        tercero: '#31383B',
        cuarto: '#7BEDC2',
        quinto: '#84A196',
        sexto: '#EDE16F'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
