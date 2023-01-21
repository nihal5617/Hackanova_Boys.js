import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    farmers: [],
    farmer: {},
    loading: false,
    error: null,
};

const farmerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_FARMERS:
            return {
                ...state,
                farmers: action.payload,
            };
        default:
            return state;
    }
}

export default farmerReducer;