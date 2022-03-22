module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors:{
        red: '#ff000050',
        green: "#00ff0050",
        blue:'#0000ff50',
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {},
  },
}
