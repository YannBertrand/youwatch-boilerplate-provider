const utils = require('./utils');

module.exports = (() => {

  function getName() { return 'boilerplate'; }
  function getConfigPrefix() { return 'providers.' + getName(); }

  function init(callback, options) {
    utils.testCallback(callback);
    utils.returnCallbackError(utils.testObject('options', options));
    utils.returnCallbackError(utils.testFunction('options.config.has', options.config.has));
    utils.returnCallbackError(utils.testFunction('options.config.get', options.config.get));
    utils.returnCallbackError(utils.testFunction('options.config.set', options.config.set));
    utils.returnCallbackError(utils.testFunction('options.app', options.app.getPath));

    if (!options.config.has(getConfigPrefix())) {
      // Overload this empty object if you want to add default parameters
      options.config.set(getConfigPrefix(), {});
    }

    // You can now retrieve config parameters and store them

    return callback();
  }

  function refreshSubscriptions(callback) {
    utils.testCallback(callback);

    return callback();
  }

  function refreshVideos(callback, channel) {
    utils.testCallback(callback);
    utils.returnCallbackError(utils.testOptionalObject('channel', channel));

    return callback(null, []);
  }

  function getVideos(callback, channel) {
    utils.testCallback(callback);
    utils.returnCallbackError(utils.testOptionalObject('channel', channel));

    return callback(null, []);
  }

  function getOlderVideos(callback, video) {
    utils.testCallback(callback);
    utils.returnCallbackError(utils.testOptionalObject('video', video));

    return callback(null, []);
  }

  function videoProgress(callback, video, time) {
    utils.testCallback(callback);
    utils.returnCallbackError(utils.testObject('video', video));
    utils.returnCallbackError(utils.testString('time', time));

    return callback();
  }

  return {
    getName,
    getConfigPrefix,
    init,
    refreshSubscriptions,
    refreshVideos,
    getVideos,
    getOlderVideos,
    videoProgress,
  };

})();
