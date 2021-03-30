import mongoose from 'mongoose';
import nano from 'nanoid';
const urlSchema = new mongoose.Schema({
  orginal: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    default: nano(12),
  },
});

export default mongoose.model('url', urlSchema);
