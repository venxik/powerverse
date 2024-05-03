import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MainState } from './types';
import { AnimeItem } from '@Services/queries/getAnime';

export const initialState: MainState = {
  selectedAnime: null,
};
const reducerName = 'main';

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setSelectedAnime(state: MainState, action: PayloadAction<AnimeItem>) {
      state.selectedAnime = action.payload;
    },
  },
});

export const mainReducer = { [reducerName]: slice.reducer };

export const { setSelectedAnime } = slice.actions;

export * from './types';
