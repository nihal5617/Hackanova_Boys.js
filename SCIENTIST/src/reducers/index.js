import {combineReducers} from 'redux';

import cropPrediction from './cropPrediction/cropPrediction'
import diseaseControl from './diseaseControl/diseaseControl'
import auth from './auth/auth'
import post from './post/post'
import farmer from './farmer/farmer'

export const reducers = combineReducers({
    cropPrediction,
    diseaseControl,
    auth,
    post,
    farmer
});