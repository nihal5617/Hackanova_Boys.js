import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    auth: localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : null,
    coins: 0,
    state: 'idle',
    error: null
};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SIGNUP:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
            return {
                ...state,
                auth: action.payload,
                coins: action.payload.coins ? action.payload.coins : 0,
                state: 'success',
                error: null
            };
        case actionTypes.LOGIN:
            console.log(action.payload);
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
            return {
                ...state,
                auth: action.payload,
                coins: action.payload.coins ? action.payload.coins : 0,
                state: 'success',
                error: null
            };
        case actionTypes.UPDATE_COINS:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
            return {
                ...state,
                auth: action.payload,
                coins: action.payload.coins ? action.payload.coins : 0,
                state: 'success',
                error: null
            };
        case actionTypes.LOGOUT:
            localStorage.clear();
            return {
                ...state,
                auth: null,
                state: 'success',
                error: null
            };
        default:
            return state;
    }
};

export default authReducer;
