module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  purge: {
    content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"]
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
