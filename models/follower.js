var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followerSchema = new Schema({
  id: {
    type: String,
    required: true
  },

  follows_viewer: {
    type: Boolean,
    required: true
  },

  requested_by_viewer: {
    type: Boolean,
    required: true
  },

  username: {
    type: String,
    required: true
  },

  full_name: {
    type: String,
  },

  has_requested_viewer: {
    type: Boolean
  },

  is_private: {
    type: Boolean
  },

  is_verified: {
    type: Boolean
  },

  profile_pic_url: {
    type: String
  }
});

const Follower = mongoose.model('Follower', followerSchema);

module.exports = Follower;
