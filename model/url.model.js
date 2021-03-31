import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
const urlSchema = new mongoose.Schema({
  orginal: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    default: nanoid(12),
  },
});
mongoose.models = {};
const model = mongoose.model('url', urlSchema);
export default model;
