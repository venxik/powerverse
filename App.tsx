import AppNavigator from '@Navigation/index';
import { store } from '@Stores';
import React from 'react';
import { MD3LightTheme, MD3Theme, PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

export const theme: MD3Theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
};

export default App;
