import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (build) => ({
    getAllBooks: build.query({
      query: () => "/books",
    }),
  }),
});

export const { useGetAllBooksQuery } = bookApi;