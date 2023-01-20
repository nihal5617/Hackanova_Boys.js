import {ADD_POST, GET_POST, GET_POSTS, LIKE_POST, UNLIKE_POST, DELETE_POST, COMMENT_POST} from '../../constants/actionTypes';
import * as api from '../../api/index'

export const getPosts = () => async(dispatch) => {
    try{
        const {data} = await api.getPosts();
        console.log(data);
        dispatch({type: GET_POSTS, payload: data});
    }catch(error){
        console.log(error);
    }
}

export const addPost = (postInfo, id) => async(dispatch) => {
    try{
        const {data} = await api.addPost(postInfo, id);
        dispatch({type: ADD_POST, payload: data});
    }catch(error){
        console.log(error);
    }
}

export const addLike = () => async(dispatch) => {
}

export const removeLike = () => async(dispatch) => {
}

export const deletePost = (id) => async (dispatch) => {
    try{
        console.log(id);
        await api.deletePost(id);
        dispatch({type: DELETE_POST, payload: id});
    }catch(error){
        console.log(error);
    }
}