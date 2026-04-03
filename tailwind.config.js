/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rooted: {
          brown: {
            900: '#2A1810',
            800: '#3C2415',
            700: '#5C3D2E',
            600: '#6B4D3E',
            500: '#8B6F4E',
            400: '#A68B6B',
            300: '#C4A882',
            200: '#D4C4A8',
            100: '#E8DDD0',
          },
          cream: {
            DEFAULT: '#F5F0EB',
            light: '#FAF8F5',
            dark: '#EDE5DB',
          },
          green: {
            DEFAULT: '#2D5A3D',
            dark: '#1E3D2A',
            light: '#3A7350',
          },
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-huge': ['clamp(5rem, 15vw, 18rem)', { lineHeight: '0.8', letterSpacing: '-0.03em' }],
        'display': ['clamp(4rem, 10vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'headline': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
}
