const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  name: String,
  genre: String,
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
});

module.exports = mongoose.model('Collection', collectionSchema);
