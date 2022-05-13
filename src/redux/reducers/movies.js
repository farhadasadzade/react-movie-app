const initialState = {
    movies: [],
    isLoaded: false
}

const movies = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_MOVIES':
            return {
                ...state,
                movies: action.payload,
                isLoaded: true
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