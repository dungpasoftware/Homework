import { CHOOSE_MOVIE, LIST_DATA } from './type'

export const chooseMovie = (movieInfo) => ({
    type: CHOOSE_MOVIE,
    payload: movieInfo
})

export const listData = (data) => ({
    type: LIST_DATA,
    payload: data
})