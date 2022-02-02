import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://guy-online-shope-app.herokuapp.com/',
  }),
  endpoints: builder => ({
    getAllProducts: builder.query({
      query: () => 'products',
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
