import { baseApi } from './queries';

export * from './baseQuery';

export const combinedMiddleware = [baseApi.middleware];
