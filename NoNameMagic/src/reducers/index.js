import { combineReducers } from 'redux'

import movieReducer from './movieReducer'
import dataReducer from './dataReducer';

export default combineReducers({
    movieSelected: movieReducer,
    dataForList: dataReducer
})