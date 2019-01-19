const User = require('../user/user.model');
const Follower = require('../follower/follower.model');

class MassFollowService {
  constructor() {}

  async createWork(data) {
    const activeUsers = await User.find({
      is_active: true
    }).exec();

    if (!activeUsers.length) {
      return 'no active users'
    }

    const followers = await Follower.find({
      followerUser: activeUsers[0]._id
    }).exec();


    // followers.forEach((follower) => {
    //   await follower(follower.id)
    // })

    console.log(followers, '----')
    return followers
    // return new Follower(data).save();
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
