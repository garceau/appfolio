const BaseController = require('./base.controller');

class HomeController extends BaseController {
  registerRoutes(router) {
    router.get('/', this.index.bind(this));
  }

  index(req, res) {
    res.status(200).end('SUCCESS');
  }
}

module.exports = HomeController;
