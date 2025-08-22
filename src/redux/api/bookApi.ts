import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["book"],
  endpoints: (build) => ({
    getAllBooks: build.query({
      query: () => "/books",
      providesTags: ["book"],
    }),
    getBookById: build.query({
      query: (id) => `/books/${id}`,
      providesTags: ["book"],
    }),
    deleteBook: build.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useDeleteBookMutation,
  useGetBookByIdQuery,
} = bookApi;
