const FollowerService = require('./follower.service');

module.exports = {
  index(req, res, next) {
    new FollowerService()
      .get()
      .then(users => res.status(200).json(users))
      .catch(error => next(error));
  },

  create(req, res, next) {
    new FollowerService()
      .create(req.body)
      .then(user => res.status(200).json(user).end())
      .catch(error => next(error));
  },

  getById(req, res, next) {
    new FollowerService()
      .getById(req.params.followerId)
      .then(user => res.status(200).json(user).end())
      .catch(error => next(error));
  },

  updateById(req, res, next) {
    new FollowerService()
      .updateById(req.params.followerId, req.body)
      .then(user => res.status(200).json(user).end())
      .catch(error => next(error));
  }
}