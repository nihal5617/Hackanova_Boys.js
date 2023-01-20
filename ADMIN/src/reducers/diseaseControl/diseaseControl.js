import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    diseaseControl: [],
    loading: false,
    error: null
};

const diseaseControlReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.DISEASE:
            return {
                ...state,
                diseaseControl: action.payload,
                loading: false,
                error: null
            };
        default: 
            return state;
    }
}

export default diseaseControlReducer;