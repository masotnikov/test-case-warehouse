import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "@/app/api/userApi";
import { todoApi } from "@/app/api/todoApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, todoApi.middleware),
});
