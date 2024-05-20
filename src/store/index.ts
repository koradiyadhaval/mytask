import {configureStore} from '@reduxjs/toolkit';
import Home from './slice/Application';

export const store = configureStore({
  reducer: {
    Home,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
