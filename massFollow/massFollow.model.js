var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followerSchema = new Schema({
  status: {
    type: String,
    required: true
  },

  followTotal: {
    type: Number,
    required: true
  },

  likeTotal: {
    type: Number,
    required: true
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at'
  }
});

const Follower = mongoose.model('Follower', followerSchema);

module.exports = Follower;