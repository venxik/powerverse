import { AppStore, RootState, setupStore } from '@Stores';
import { render } from '@testing-library/react-native';
import React, { PropsWithChildren } from 'react';
import { MD3LightTheme, MD3Theme, PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

const theme: MD3Theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
  },
};

interface ExtendedRenderOptions {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <PaperProvider theme={theme}>
        <Provider store={store}>{children}</Provider>
      </PaperProvider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export const AllTheProviders = ({ children }: { children: JSX.Element }) => {
  return <Provider store={setupStore()}>{children}</Provider>;
};

// override render method
export { renderWithProviders as render };
