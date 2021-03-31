import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  orginal: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
  },
});
mongoose.models = {};
const model = mongoose.model('url', urlSchema);
export default model;
