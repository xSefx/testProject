import { configureStore, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const persistAuthConfig = {
  key: 'auth',
  storage,
  blacklist: ['errorMessage', 'error']
}

const persistHistoryConfig = {
  key: 'history',
  storage
}

const store = configureStore({
  reducer: combineReducers({
    auth: persistReducer(persistAuthConfig, rootReducer.auth),
    console: rootReducer.console,
    history: persistReducer(persistHistoryConfig, rootReducer.history)
  }),
  middleware: [sagaMiddleware]
})

let persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store, persistor }
