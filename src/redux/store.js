import { createStore, compose, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/'
import thunk from 'redux-thunk'

import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['watchList']
}

// let store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(thunk))
// )

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export let persistor = persistStore(store)
export default store
