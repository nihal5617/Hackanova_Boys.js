import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CropDetailSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  totalCrops: {type: String},
  totalFarmArea: {type: String},
  totalDeceased: {type: String},
  totalProduction: {type: String},
  months: {
    jan: {type: String},
    feb: {type: String},
    mar: {type: String},
    apr: {type: String},
    may: {type: String},
    jun: {type: String},
    jul: {type: String},
    aug: {type: String},
    sep: {type: String},
    oct: {type: String},
    nov: {type: String},
    dec: {type: String},
  }
});

export default mongoose.model('cropDetails', CropDetailSchema);
