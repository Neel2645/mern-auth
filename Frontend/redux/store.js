import {combineReducers, configureStore} from '@reduxjs/toolkit'
import  userReducer  from './userSlice.js';
// eslint-disable-next-line no-unused-vars
import {persistReducer} from 'redux-persist'
// eslint-disable-next-line no-unused-vars
import { version } from 'mongoose';
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({user : userReducer})

const persistConfig = {
    key : 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig , rootReducer);

export const store = configureStore({
    reducer : persistedReducer ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);