import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { CommentsApi } from "@/common/services/comments"; // Add this import

export const store = configureStore({
  reducer: {
    [CommentsApi.reducerPath]: CommentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(CommentsApi.middleware)
});

setupListeners(store.dispatch);