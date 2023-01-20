// import { CROP_PREDICTION } from "../../constants/actionTypes";
// import * as api from "../../api/index";
import axios from "axios";

export const cropPrediction = (cropInfo) => async(dispatch) => {
    try{
        const data = await axios.post("http://127.0.0.1:8000/recommend", cropInfo)
        console.log(data)
    }catch(error){
        console.log(error)
    }
}