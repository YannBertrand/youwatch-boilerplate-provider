const _ = require('lodash');

module.exports = (() => {

  let httpServer;
  let config;

  function init(_httpServer, _config, callback) {
    if (!_.isObject(_httpServer) || !_.isObject(_config)) {
      throw new TypeError();
    }

    httpServer = _httpServer;
    config = _config;

    httpServer.hapi.route({
      method: 'GET',
      path: '/provider/callback',
      handler: (request, reply) => {
        return reply.file(require('path').join('client/authenticated.html'));
      },
    })
  }

  return {
    init
  };

})();
