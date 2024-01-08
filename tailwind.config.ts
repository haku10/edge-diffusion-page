import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '22': '88px',
        '105': '420px',
        '112': '448px',
        '130': '520px',
      },
      textColor: {
        DEFAULT: '#000',
      },
      fontSize: {
        'title': '128px',
      },
      backgroundImage: {
        'main': 'radial-gradient(50% 50% at 50% 50%, #FFF 72.4%, #F5F5F5 100%)',
        "second-black": "linear-gradient(180deg, #F6F6F6 0%, #000 7.29%, #000 92.19%, rgba(244, 244, 244, 0.06) 100%)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
