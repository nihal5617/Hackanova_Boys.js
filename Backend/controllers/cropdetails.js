import CropDetails from "../models/CropDetails.js";

//get CropDetails by id
export const getCropDetailsById = async (req, res) => {
    try{
        const cropdetails = await CropDetails.findById(req.params.id);
        res.status(200).json(cropdetails);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//post CropDetails
export const postCropDetails = async (req, res) => {
    const cropdetails = new CropDetails(req.body);
    try{
        const newCropDetails = await cropdetails.save();
        res.status(201).json(newCropDetails);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

