import { combineReducers } from 'redux';

import moviesReducer from './movies'
import searchReducer from './search'
import watchList from './watchlist'
import about from './about';

const rootReducer = combineReducers({
    movies: moviesReducer,
    search: searchReducer,
    watchList,
    about
})

export default rootReducer;