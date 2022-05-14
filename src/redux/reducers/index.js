import { combineReducers } from 'redux';

import moviesReducer from './movies'
import searchReducer from './search'
import watchList from './watchlist'

const rootReducer = combineReducers({
    movies: moviesReducer,
    search: searchReducer,
    watchList
})

export default rootReducer;