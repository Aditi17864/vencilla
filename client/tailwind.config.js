/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Luxury dark palette
        void: '#0a0a0a',
        abyss: '#050505',
        obsidian: '#111111',
        charcoal: '#1a1a1a',
        graphite: '#2a2a2a',
        smoke: '#3a3a3a',
        ash: '#666666',
        silver: '#999999',
        mist: '#cccccc',
        cloud: '#e8e8e8',
        // Gold system
        gold: '#C9A24B',
        'gold-light': '#E8D5A3',
        'gold-dark': '#8B6914',
        'gold-deep': '#6B4F0A',
        'gold-pale': '#F5ECD7',
        // Legacy (for existing pages)
        ink: '#0F2A3D',
        ink2: '#163B52',
        teal: '#0E7C86',
        tealDark: '#0A5C64',
        paper: '#F6F7F5',
        slate: '#4A5A63',
        line: '#DDE3E1',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A24B 0%, #E8D5A3 50%, #C9A24B 100%)',
        'gold-radial': 'radial-gradient(ellipse at center, rgba(201,162,75,0.15) 0%, transparent 70%)',
        'dark-gradient': 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(201,162,75,0.3), 0 0 60px rgba(201,162,75,0.1)',
        'gold-sm': '0 0 15px rgba(201,162,75,0.2)',
        'luxury': '0 25px 60px rgba(0,0,0,0.5)',
        'glass': '0 8px 32px rgba(0,0,0,0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
