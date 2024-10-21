const mongoose = require('mongoose');
const artistSchema = new mongoose.Schema({
  artistname: { type: String, required: true },
  bio: { type: String, required: true },
  genre: { type: String, required: true },
  albums: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }],
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }]
});
module.exports = mongoose.model('Artist', artistSchema);