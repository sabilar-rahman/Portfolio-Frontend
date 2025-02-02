

import { configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// import { baseApi } from './api/baseApi'
import authSlice from './featuresApi/auth/authSlice'
import { baseApi } from './baseApi'

const persistConfig = {
  key: 'auth',
  storage
}

const persistedAuthReducer = persistReducer(persistConfig, authSlice)

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(baseApi.middleware)
})

export const persistor = persistStore(store)


