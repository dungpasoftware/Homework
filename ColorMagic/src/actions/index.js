import {CHANGE_COLOR} from './actionType'

export const changeColor = (RGBcolor) => ({
    type: CHANGE_COLOR,
    payload : RGBcolor
})