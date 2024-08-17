/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        secondary: {
          50: '#e6fffa', // Lightest shade
          100: '#b9fbc0',
          200: '#8cf1a2',
          300: '#5be58f',
          400: '#2ed77f',
          500: '#0dcf6d', // Base color
          600: '#0aa45d',
          700: '#08894a',
          800: '#066f39',
          900: '#045528', // Darkest shade
        },
        "text-dark": "#333333",
        "highlight-light-blue": "#66CCFF",
      },
    },
  },
  plugins: [],
};
