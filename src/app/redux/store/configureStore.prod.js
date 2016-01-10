import { createStore, compose, applyMiddleware } from 'redux'
import CombinedReducers from './reducers/combinedReducers'
import thunk from 'redux-thunk'
import storeEnhancer from 'redux-history-transitions'

export default function configureStore(initialState, history) {
  const finaleCreateStore = compose (
    applyMiddleware(thunk),
    storeEnhancer(history),
  )((createStore))

  return finaleCreateStore(CombinedReducers, initialState)
}
