 

// import storageSession from 'redux-persist/lib/storage/session'
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
// import {reducer} from './slice';
import  reducer from '../index';
import AsyncStorage from '@react-native-async-storage/async-storage';

 
  const persistConfig = {
    storage: AsyncStorage,
    key: 'root',
    blocklist: []
  };
  const rootReducer = combineReducers({
    reducer,
  });


export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);

