export const createPlayList = (playlistName, movies) => ({
    type: 'CREATE_PLAYLIST',
    payload: {
        playlistName,
        movies
    }
})

export const deletePlayList = (playlistName) => ({
    type: 'DELETE_PLAYLIST',
    payload: playlistName
})