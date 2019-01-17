const User = require('../user/user.model');

class MassFollowService {
  constructor() {}

  createWork(data) {
    return new Follower(data).save();
  }

  get() {
    return Follower.find().exec();
  }

  getById(followerId) {
    return Follower.findById(followerId).exec();
  }

  updateById(followerId, followerData) {
    return Follower.update({
      _id: followerId
    }, {
      $set: followerData
    }).exec();
  }


}

module.exports = MassFollowService;