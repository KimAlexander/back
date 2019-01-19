const UserService = require('./customer.service');

module.exports = {
  index(req, res, next) {
    new UserService()
      .get()
      .then(users => res.status(200).json(users))
      .catch(error => next(error));
  },

  create(req, res, next) {
    new UserService()
      .create(req.body)
      .then(user => res.status(200).json(user).end())
      .catch(error => next(error));
  },

  getById(req, res, next) {
    new UserService()
      .getById(req.params.userId)
      .then(user => res.status(200).json(user).end())
      .catch(error => next(error));
  },

  updateById(req, res, next) {
    new UserService()
      .updateById(req.params.userId, req.body)
      .then(user => res.status(200).json(user).end())
      .catch(error => next(error));
  }
}