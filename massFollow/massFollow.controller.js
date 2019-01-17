const FollowerService = require('./massFollow.service');

module.exports = {
  activeProcess(req, res, next) {
    new FollowerService()
      .get()
      .then(users => res.status(200).json(users))
      .catch(error => next(error));
  },

  createWork(req, res, next) {
    new FollowerService()
      .createWork(req.body)
      .then(user => res.status(200).json(user).end())
      .catch(error => next(error));
  },

  getProcessById(req, res, next) {
    new FollowerService()
      .getById(req.params.followerId)
      .then(user => res.status(200).json(user).end())
      .catch(error => next(error));
  },

  updateProcessById(req, res, next) {
    new FollowerService()
      .updateById(req.params.followerId, req.body)
      .then(user => res.status(200).json(user).end())
      .catch(error => next(error));
  }
}