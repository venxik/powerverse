import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@Services/baseQuery';

const reducerPathBaseApi = 'baseApi';

export const baseApi = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
  reducerPath: reducerPathBaseApi,
  tagTypes: ['assessment', 'pickupList'],
});

export const baseApiReducer = { [reducerPathBaseApi]: baseApi.reducer };
