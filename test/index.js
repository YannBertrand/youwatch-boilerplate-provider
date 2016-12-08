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

  describe('init(config, callback)', () => {
    it('should not throw an error when config and callback is defined', () => {
      const config = { get: () => {}, set: () => {} };

      should(BoilerplateProvider.init.bind(null, config, () => {})).not.throw;
    });
  });

});
