// import {configureStore} from '@reduxjs/toolkit';
// import Application from './slice/Application';

//   const store = configureStore({
//   reducer: {
//     Application:Application,
//   },
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
// export default store;

import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit'
// import UserLogin from './slice/UserLogin'
import Application from './slice/Application'
// import ApplicationState from './slice/ApplicationState'
import storage from "@react-native-async-storage/async-storage";
// import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
// import EncryptedStorage from 'react-native-encrypted-storage';

// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {
//     UserLogin: UserLogin,
//     ApplicationState: ApplicationState,
//   },
// })

// WHITELIST
const persistConfig = {
  key: 'root',
  storage:storage,
  // only navigation will be persisted
};
const userPersistConfig = {
  key: 'Application',
  storage: storage,
}

// const persistedReducer = persistReducer(persistConfig, UserLogin,)

const rootReducer = combineReducers({
  Application: persistReducer(userPersistConfig, Application),
  
 
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  // reducer:  {
  //       UserLogin: UserLogin,
  //       ApplicationState: ApplicationState,
  //     },
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),
  // middleware:  () =>  [thunk]
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch