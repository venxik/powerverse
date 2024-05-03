module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@Navigation': './src/navigation',
          '@Components': './src/components',
          '@Screens': './src/screens',
          '@Stores': './src/stores',
          '@Utils': './src/utils',
          '@Services': './src/services',
          '@Model': './src/model',
          '@Native': './src/native',
          '@Assets': './assets',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};
