var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true
  },

  follow_count: {
    type: Number,
    required: true
  },

  blocked_by_viewer: {
    type: Boolean,
    required: true
  },

  biography: {
    type: String
  },

  profile_pic_hd: {
    type: String,
    required: true
  },

  full_name: {
    type: String,
    required: true
  },

  followers_list: {
    type: Array,
    required: true
  },

  follow_count: {
    type: Number,
    required: true
  },

  last_post_time: {
    type: Date
  },

  is_active: {
    type: Boolean,
    required: true
  }

}, {
    timestamps: {
      createdAt: 'created_at'
    }
  });

const User = mongoose.model('User', userSchema);

module.exports = User;
