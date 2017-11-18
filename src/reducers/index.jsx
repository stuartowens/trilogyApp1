import { combineReducers } from 'redux';

import queryReducer from './reducers.jsx'

const rootReducer = combineReducers({
  queries: queryReducer
})

export default rootReducer;
