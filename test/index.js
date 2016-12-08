const should = require('should');

const BoilerplateProvider = require('../src/index');

describe('BoilerplateProvider', () => {

  it('should exists', () => {
    should(BoilerplateProvider).not.be.null;
  });

  describe('init', () => {
    it('should be defined and be a function', () => {
      should(BoilerplateProvider.init).not.be.null;
      should(BoilerplateProvider.init).be.a.Function;
    });
  });

  describe('init()', () => {
    it('should throw an error if no argument are passed', () => {
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
    it('should not throw an error when httpServer and config are both defined', () => {
      const httpServer = { hapi: { route: () => {} } };
      const config = { get: () => {}, set: () => {} };

      should(BoilerplateProvider.init.bind(null, httpServer, config)).not.throw(Error);
    });
  });

});
