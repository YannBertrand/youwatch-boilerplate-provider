const should = require('should');

const BoilerplateProvider = require('../src/index');

describe('BoilerplateProvider', () => {

  it('the BoilerplateProvider should exist', () => {
    should(BoilerplateProvider).not.be.null;
  });

  describe('init', () => {
    it('the init method should be defined', () => {
      should(BoilerplateProvider.init).not.be.null;
    });
  });

  describe('init()', () => {
    it('the init method should throw an error if no argument are passed', () => {
      should(BoilerplateProvider.init).throw(Error);
    });
  });

  describe('init({})', () => {
    it('should throw an error because config is not defined', () => {
      should(BoilerplateProvider.init.bind(null, {})).throw(Error);
    });
  });

  describe('init(null, {})', () => {
    it('should throw an error because httpServer is not defined', () => {
      should(BoilerplateProvider.init.bind(null, null, {})).throw(Error);
    });
  });

  describe('init(httpServer, config)', () => {
    it('should throw an error because httpServer and config are not good types', () => {
      const httpServer = { hapi: { route: () => {} } };
      const config = { get: () => {}, set: () => {} };
      const init = BoilerplateProvider.init.bind(null, httpServer, config);
      init();

      should(init).not.throw(Error);
    });
  });

});
