const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }]
});

// Phương thức thêm bài hát vào playlist
playlistSchema.methods.addSong = function (songId) {
  this.songs.push(songId);
  return this.save();
};

module.exports = mongoose.model('Playlist', playlistSchema);
