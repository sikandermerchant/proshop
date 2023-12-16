import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => PRODUCTS_URL,
      // providesTags: ["Product"],
    }),
    keepUsedDataFor: 5 // 5 seconds
  }),
});

export const { useGetProductsQuery } = productsApiSlice;