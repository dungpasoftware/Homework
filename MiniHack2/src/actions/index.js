import { CHANGE_VALUE } from './type'

export const changeValue = (data) => ({
    type: CHANGE_VALUE,
    payload: data
})