import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { rootReducer } from './rootReducer';
import { combinedMiddleware } from '@Services';
import { setupListeners } from '@reduxjs/toolkit/query';

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        combinedMiddleware,
      ),
    preloadedState,
  });
};

const store = setupStore();

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

setupListeners(store.dispatch);

const useReduxDispatch = () => useDispatch<AppDispatch>();
const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, useDispatch, useReduxDispatch, useReduxSelector, useSelector };
export type { AppStore, RootState };
export * from './main';
