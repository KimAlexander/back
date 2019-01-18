const User = require('./user.model');

class UserService {
  constructor() {}

  async create(data) {
    try {
      await new User(data).save()
    } catch (e) {
      return e
    }
  }

  get() {
    return User.find().exec();
  }

  getById(userId) {
    return User.findById(userId).exec();
  }


  updateById(userId, userData) {
    console.log('*****', userId, '******')
    console.log(userData)
    return User.update({
      _id: userId
    }, {
      $set: userData
    }).exec();
  }
}

module.exports = UserService;