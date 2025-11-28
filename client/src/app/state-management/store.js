import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import popupReducer from './slices/popup';
import userReducer from './slices/userData';

const authPersistConfig = {
  key: 'userData',
  storage,
  whitelist: ['sellersToken' , 'darkmode'],
};

const rootReducer = combineReducers({
  userData: persistReducer(authPersistConfig, userReducer),
  popup: popupReducer, 
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
