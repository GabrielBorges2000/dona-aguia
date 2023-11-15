import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'var(--font-roboto)',
      },

      colors: {
        project: {
          grayLigth: '##E4E4E4',
          gradientRight:
            'linear-gradient(270deg, #FFA724 0%, rgba(255, 167, 36, 0.00) 100%)',
          gradientLeft:
            'linear-gradient(270deg,rgba(255, 167, 36, 0.00) 0%,  #FFA724 100%)',
        },
      },
    },
  },
  plugins: [],
}
export default config
