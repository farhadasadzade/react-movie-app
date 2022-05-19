const initialState = {
    playlistArray: [],
    names: []
}

const playlist = (state = initialState, action) => {

    switch (action.type) {
        case 'CREATE_PLAYLIST':

            [...state.names].includes(action.payload.playlistName) && alert('Bu adda playlist var!')

            let playlistArray = ![...state.names].includes(action.payload.playlistName) ? [...state.playlistArray, action.payload] : [...state.playlistArray]
            let names = ![...state.names].includes(action.payload.playlistName) ? [...state.names, action.payload.playlistName] : [...state.names]

            return {
                playlistArray: playlistArray,
                names: names
            }
        case 'DELETE_PLAYLIST':
            // eslint-disable-next-line
            let newItems = [...state.playlistArray].filter((item) => {
                if (item.playlistName !== action.payload) {
                    return item
                }
            })
            // eslint-disable-next-line
            let newNames = [...state.names].filter((item) => {
                if (item !== action.payload) {
                    return item
                }
            })

            return {
                playlistArray: newItems,
                names: newNames
            }
        default:
            return state
    }

}

export default playlist