import axios from 'axios';

export const setLoaded = val => ({
    type: 'SET_LOADED',
    payload: val
})

export const fetchMovies = (page) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=887987c153545960bfcff4b05ef39354&page=${page}`).then(({ data }) => {
        setTimeout(() => dispatch(setMovies(data, page)), 2000)
    })
}

export const setPage = (page) => (dispatch) => {
    dispatch(fetchMovies(page))
}

export const setMovies = (movies, page) => ({
    type: 'SET_MOVIES',
    payload: {
        movies,
        page
    }
});