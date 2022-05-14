export const addMovie = (obj) => ({
    type: 'ADD_MOVIE',
    payload: obj
})

export const deleteMovie = (id) => ({
    type: 'DELETE_MOVIE',
    payload: id
})

export const clearList = () => ({
    type: 'CLEAR_LIST',
})