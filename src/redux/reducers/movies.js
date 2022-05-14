const initialState = {
    movies: [],
    isLoaded: false,
    page: 1
}

const movies = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_MOVIES':
            return {
                ...state,
                movies: action.payload.movies,
                isLoaded: true,
                page: action.payload.page
            };

        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }

        default:
            return state

    }

}

export default movies;