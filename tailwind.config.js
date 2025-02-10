/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {},
      // Add custom skeleton class
      animation: {
        'skeleton-load': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'skeleton': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      // Add custom gradient colors
      gradientColorStops: {
        'skeleton-light': {
          from: '#e5e7eb', // gray-200
          via: '#d1d5db', // gray-300  
          to: '#e5e7eb',  // gray-200
        },
        'skeleton-dark': {
          from: '#374151', // gray-700
          via: '#4b5563', // gray-600
          to: '#374151',  // gray-700
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};