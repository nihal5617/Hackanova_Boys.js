import {combineReducers} from 'redux';

import cropPrediction from './cropPrediction/cropPrediction'
import diseaseControl from './diseaseControl/diseaseControl'

export const reducers = combineReducers({
    cropPrediction,
    diseaseControl
});