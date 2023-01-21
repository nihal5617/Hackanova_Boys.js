import {GET_FARMERS} from '../../constants/actionTypes'
import * as api from '../../api/index';

export const getFarmers = () => async (dispatch) => {
    try {
        const { data } = await api.getFarmers();
        dispatch({ type: GET_FARMERS, payload: data });
    } catch (error) {
        console.log(error);
    }
}
