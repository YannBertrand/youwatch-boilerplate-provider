const _ = require('lodash');

module.exports = (() => {

  let httpServer;
  let config;

  function init(_config, callback) {
    if (!_.isObject(_config)) {
      throw new TypeError('config must be defined and be object');
    }
    if (!_.isFunction(callback)) {
      throw new TypeError('callback must be defined and be a function')
    }

    config = _config;

    return callback();
  }

  return {
    init
  };

})();
