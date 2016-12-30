import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  datetime: { type: 'Date', default: Date.now, required: true },
});

postSchema.plugin(require('mongoose-paginate'));

export default mongoose.model('Post', postSchema);
