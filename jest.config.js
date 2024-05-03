module.exports = {
  preset: 'react-native',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|react-native-paper|@react-navigation/.*|@react-native-community/.*|react-redux)',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
};
