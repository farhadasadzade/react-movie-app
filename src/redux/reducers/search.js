const initialState = {
    searchMovies: [],
    isLoadedSearch: false,
    pageSearch: 1,
    query: ''
}

const search = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_SEARCH_MOVIES':
            return {
                ...state,
                searchMovies: action.payload.searchMovies,
                isLoadedSearch: true,
                pageSearch: action.payload.pageSearch,
                query: action.payload.query
            };

        case 'SET_SEARCH_LOADED':
            return {
                ...state,
                isLoadedSearch: action.payload
            }

        default:
            return state

    }

}

export default search;