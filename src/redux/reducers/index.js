import { combineReducers } from 'redux';

import moviesReducer from './movies'
import searchReducer from './search'

const rootReducer = combineReducers({
    movies: moviesReducer,
    search: searchReducer
})

export default rootReducer;