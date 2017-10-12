class BaseController {
  constructor(router) {
    this.registerRoutes(router);
  }

  registerRoutes() { return; }
}

module.exports = BaseController;
