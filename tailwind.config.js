/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans', 'sans-serif'],
      heading: ['Dosis', 'ui-serif', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        '2fr-3fr': '2fr 3fr',
        '3fr-2fr': '3fr 2fr',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@tailwindcss/typography')({}),
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        dark: {
          primary: 'oklch(0.318 0.116 26.899)',
          'primary-content': 'oklch(1 0 89.876)',
          secondary: 'oklch(0.623 0.188 259.815)',
          'secondary-content': 'oklch(1 0 89.876)',
          accent: 'oklch(0.591 0.257 322.896)',
          neutral: 'oklch(0.5 0.003 44)',
          base: 'oklch(0.23 0.003 44)',
          'base-100': 'oklch(0.33 0.003 44)',
          'base-200': 'oklch(0.44 0.003 44)',
          'base-content': 'oklch(0.961 0 44)',
          info: 'oklch(0.468 0.04 259.346)',
          success: 'oklch(0.723 0.192 149.579)',
          'success-content': 'oklch(1 0 89.876)',
          warning: 'oklch(0.861 0.173 91.936)',
          error: 'oklch(0.577 0.215 27.325)',
          'error-content': 'oklch(1 0 89.876)',
        },
      },
      {
        light: {
          primary: 'oklch(0.444 0.161 26.899)',
          'primary-content': 'oklch(1 0 89.876)',
          secondary: 'oklch(0.623 0.188 259.815)',
          'secondary-content': 'oklch(1 0 89.876)',
          accent: 'oklch(0.591 0.257 322.896)',
          neutral: 'oklch(0.78 0 89.876)',
          base: 'oklch(0.95 0 89.876)',
          'base-100': 'oklch(0.97 0.001 106.424)',
          'base-200': 'oklch(0.935 0.001 17.179)',
          'base-content': 'oklch(0.2 0 44)',
          info: 'oklch(0.446 0.026 256.802)',
          success: 'oklch(0.723 0.192 149.579)',
          'success-content': 'oklch(1 0 89.876)',
          warning: 'oklch(0.861 0.173 91.936)',
          error: 'oklch(0.577 0.215 27.325)',
          'error-content': 'oklch(1 0 89.876)',
        },
      },
    ],
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
