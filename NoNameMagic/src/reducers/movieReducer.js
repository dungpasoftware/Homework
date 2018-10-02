import { CHOOSE_MOVIE } from '../actions/type'

export default function (movie = {}, action) {
    switch (action.type) {
        case CHOOSE_MOVIE:
            return action.payload
        default:
            return movie
    }
}