const initialState = {
    movie: {}
}

const about = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ABOUT':

            return {
                ...state,
                movie: action.payload
            }
        default:
            return state
    }
}

export default about