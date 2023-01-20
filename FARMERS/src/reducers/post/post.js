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
        case actionTypes.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post._id !== action.payload),
                state: 'success',
                error: null
            };
        case actionTypes.LIKE_POST:
            return {
                ...state,
                posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post),
                state: 'success',
                error: null
            };
        case actionTypes.UNLIKE_POST:
            return {
                ...state,
                posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post),
                state: 'success',
                error: null
            };
        default:
            return state;
    }
};

export default postReducer;