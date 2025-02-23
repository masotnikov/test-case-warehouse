import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Todo } from "@/app/types";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "/todos",
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;