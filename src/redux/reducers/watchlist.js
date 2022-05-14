const initialState = {
    movies: [],
    totalFilms: 0,
    id: []
}

const watchList = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_MOVIE':
            [...state.id].includes(action.payload.id) && alert('Bu film artıq siyahıya əlavə olunub')

            let items = ![...state.id].includes(action.payload.id) ? [...state.movies, action.payload] : [...state.movies]
            let ids = ![...state.id].includes(action.payload.id) ? [...state.id, action.payload.id] : [...state.id]

            return {
                ...state,
                movies: items,
                totalFilms: items.length,
                id: ids
            }
        case 'DELETE_MOVIE':
            // eslint-disable-next-line
            let newItems = [...state.movies].filter((item) => {
                if (item.id !== action.payload) {
                    return item
                }
            })
            // eslint-disable-next-line
            let newIds = [...state.id].filter((item) => {
                if (item !== action.payload) {
                    return item
                }
            })
            return {
                ...state,
                movies: newItems,
                totalFilms: newItems.length,
                id: newIds
            }
        case 'CLEAR_LIST':
            return {
                ...state,
                movies: [],
                totalFilms: [],
                id: []
            }
        default:
            return state
    }

}

export default watchList