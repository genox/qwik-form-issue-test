const advancedPreset = require('cssnano-preset-advanced');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
    require('tailwindcss'),
    require('postcss-flexbugs-fixes'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [require('cssnano')({
      preset: advancedPreset,
    }),] : []),

  ],
};
