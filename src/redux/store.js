import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { campervansReducer } from './slice';

const carsPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['vans'],
};

const persistedCarsReducer = persistReducer(carsPersistConfig, campervansReducer);

export const store = configureStore({
  reducer: {
    vans: persistedCarsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
