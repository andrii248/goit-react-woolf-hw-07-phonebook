import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; //
// import { contactsReducer } from './contacts/slice';
// import { filterReducer } from './filter/slice';

// const contactsPersistConfig = {
//   key: 'phonebook',
//   storage,
//   whitelist: ['contactList'],
// };
// const rootReducer = combineReducers({
//   contactList: contactsReducer,
//   filter: filterReducer,
// });

// const persistedReducer = persistReducer(contactsPersistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// const persistor = persistStore(store);

// export { store, persistor };
