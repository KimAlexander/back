var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: String,
    required: true
  },

  followers_list: {
    type: Array,
    required: true
  },

  follow_count: {
    type: String,
    required: true
  },

  last_post_time: {
    type: Date,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
