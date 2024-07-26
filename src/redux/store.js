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
  key: 'carsSlice',
  storage,
  whitelist: ['token'],
};

const persistedCarsReducer = persistReducer(carsPersistConfig, campervansReducer);

export const store = configureStore({
  reducer: {
    auth: persistedCarsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
