import { ADD_ORDER, DELETE_ORDER } from './type'

export const addOrder = (order) => ({
    type: ADD_ORDER,
    payload: order
})

export const delOrder = (name) => ({
    type: DELETE_ORDER,
    payload: name
})