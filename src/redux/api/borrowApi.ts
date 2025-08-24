import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["borrow", "book"],
  endpoints: (build) => ({
    getBorrowSummary: build.query({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),
    borrowBook: build.mutation({
      query: (body) => ({
        url: "/borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: ["borrow", "book"],
    }),
  }),
});

export const { useGetBorrowSummaryQuery, useBorrowBookMutation } = borrowApi;
