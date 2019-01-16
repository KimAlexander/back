var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followerSchema = new Schema({
  id: {
    type: String,
    required: true
  },

  is_private: {
    type: Boolean,
    required: true
  },

  is_verified: {
    type: Boolean,
    required: true
  },

  profile_pic_url: {
    type: String,
    required: true
  },

  followed_by_viewer: {
    type: Boolean,
    required: true
  },

  full_name: {
    type: String,
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

  followerUser: {
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
