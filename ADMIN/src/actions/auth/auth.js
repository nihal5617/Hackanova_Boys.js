import { LOGIN, SIGNUP, LOGOUT } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData);
        dispatch({ type: SIGNUP, payload: data });
        history('/');
    } catch (error) {
        console.log(error);
    }
};

export const signin = (formData, history) => async (dispatch) => {
    try {
        console.log(formData);
        const { data } = await api.signin(formData);
        console.log(data);
        dispatch({ type: LOGIN, payload: data });
        history('/')
    } catch (error) {
        console.log(error);
    }
}

export const logout = (history) => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT});
        history('/');
    } catch (error) {
        console.log(error);
    }
}