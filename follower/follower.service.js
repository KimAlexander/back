const Follower = require('./follower.model');

class FollowerService {
  constructor() {
  }

  create(data) {
    return new Follower(data).save();
  }

  get() {
    return Follower.find().exec();
  }

  getById(followerId) {
    return Follower.findById(followerId).exec();
  }

  updateById(followerId, followerData) {
    console.log('*****', followerId, '******')
    return Follower.update({ _id: followerId }, { $set: followerData }).exec();
    // const condition = {
    //   _id: followerId,
    //   owner: this.userId
    // };
  }


}

module.exports = FollowerService;