import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerForBrowser } from 'redux-little-router';

import rootReducer from './reducers/index.jsx';

const routes = {
  '/': {
    title: 'Home'
  },
  '/faq': {
    title: 'Faq'
  },
  '/query': {
    title: 'Query'
  }
}

const { reducer, middleware, enhancer } = routerForBrowser({ routes });

const composeMiddleware = [
  applyMiddleware(thunk, middleware)
]

window.__REDUX_DEVTOOLS_EXTENSION
composeMiddleware.push(window.__REDUX_DEVTOOLS_EXTENSION);

export default function configureStore(intialState) {
  return createStore(
    combineReducers({ router: reducer, rootReducer }),
    initialState,
    compose(enhancer, ...composeMiddleware)
  )
}
