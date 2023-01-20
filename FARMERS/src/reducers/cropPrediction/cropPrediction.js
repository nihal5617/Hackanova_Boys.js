import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    cropPrediction: [],
    loading: false,
    error: null
};

const cropPredictionReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.CROP_PREDICTION:
            return {
                ...state,
                cropPrediction: action.payload,
                loading: false,
                error: null
            };
        default: 
            return state;
    }
}

export default cropPredictionReducer;