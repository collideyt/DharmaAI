import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        accent: '#22D3EE',
      },
    },
  },
  plugins: [],
}

export default config
