/** @type{import('tailwindcss').Config}*/
const config = {
  content: ['src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)'
      }
    }
  },
  plugins: []
}

export default config
