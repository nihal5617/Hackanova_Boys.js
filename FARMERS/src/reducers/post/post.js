import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    posts: [],
    post: null,
    state: 'idle',
    error: null
};

export const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                state: 'success',
                error: null
            };
        case actionTypes.ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
                state: 'success',
                error: null
            };
        default:
            return state;
    }
};

export default postReducer;