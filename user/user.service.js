const User = require('./user.model');

class UserService {
  constructor() {
  }

  create(data) {
    return new User(data).save();
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
    return User.update({ _id: userId }, { $set: userData }).exec();
  }
}

module.exports = UserService;