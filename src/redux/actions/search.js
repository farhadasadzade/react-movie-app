import axios from 'axios';

export const setLoaded = val => ({
    type: 'SET_SEARCH_LOADED',
    payload: val
})

export const fetchSearch = (page, query) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=887987c153545960bfcff4b05ef39354&query=${query}&page=${page}`)
        .then(({ data }) => dispatch(setSearchMovies(data, page, query)))
}

export const setSearchPage = (page, query) => (dispatch) => {
    dispatch(fetchSearch(page, query))
}

export const setSearchMovies = (searchMovies, pageSearch, query) => ({
    type: 'SET_SEARCH_MOVIES',
    payload: {
        searchMovies,
        pageSearch,
        query
    }
});