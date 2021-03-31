import mongoose from 'mongoose';
export async function connectToDB() {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return;
  }
  // Use new db connection
  await mongoose.connect('mongodb://localhost:27017/url-shortener', {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
  });
}
