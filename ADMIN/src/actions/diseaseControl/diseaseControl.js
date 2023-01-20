import axios from "axios";

export const diseaseControl = (disease) => async (dispatch) => {
    try {
        const data = await axios.post("http://127.0.0.1:8000/predict", disease);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
