import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    scientists : [],
    scientist : {},
    loading : false,
    error : null,
};

const scientistReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SCIENTISTS:
            return {
                ...state,
                scientists : action.payload,
            };
        default:
            return state;
    }
}

export default scientistReducer;
