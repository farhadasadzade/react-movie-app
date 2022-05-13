import axios from 'axios';



export const fetchMovies = () => (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=887987c153545960bfcff4b05ef39354`).then(({ data }) => {
        dispatch(setMovies(data))
    })
}

export const setMovies = (movies) => ({
    type: 'SET_MOVIES',
    payload: movies
});