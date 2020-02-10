import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { createBrowserHistory } from 'history'
import storageSession from 'redux-persist/lib/storage/session'
import logger from 'redux-logger'
import apiMiddleware from '../Middlewares/apiMiddleware'

import rootReducer from './reducers'
import thunk from 'redux-thunk'

export const history = createBrowserHistory()
const middlewares = []

const persistConfig = {
  key: 'root',
  storage: storageSession
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistedReducer = persistReducer(persistConfig, rootReducer)
function configureStore() {
  middlewares.push(apiMiddleware, thunk, logger)
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  return createStore(persistedReducer, undefined, enhancer)
}

const store = configureStore({})
const persistor = persistStore(store)
export default () => {
  return { store, persistor, history }
}
