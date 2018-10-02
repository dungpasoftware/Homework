import { LIST_DATA } from '../actions/type'

export default function (data = {}, action) {
    switch (action.type) {
        case LIST_DATA:
            return action.payload
        default:
            return data
    }
}