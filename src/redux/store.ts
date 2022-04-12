import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./reducers/itemsSlice";
import criteriaReducer from "./reducers/criteriaSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    criteria: criteriaReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
