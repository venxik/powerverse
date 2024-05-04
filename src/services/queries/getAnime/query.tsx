import { ApiResponse } from '@Model/api';
import { baseApi } from '..';
import { AnimeItem, GetAnimeRequest } from './types';

export const getAnimeApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getAnimeList: build.query<ApiResponse<AnimeItem[]>, GetAnimeRequest>({
      query: ({ q, status }) => ({
        url: '/anime',
        params: { q, status },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetAnimeListQuery } = getAnimeApi;
