import {GET_SCIENTISTS} from '../../constants/actionTypes'
import * as api from '../../api/index';

export const getScientists = () => async (dispatch) => {
    try {
        const { data } = await api.getScientists();
        dispatch({ type: GET_SCIENTISTS, payload: data });
    } catch (error) {
        console.log(error);
    }
}
