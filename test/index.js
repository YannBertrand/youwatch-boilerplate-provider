const should = require('should');

const Provider = require('../src/index');

describe('Provider', () => {

  it('should exists', () => {
    should.exist(Provider);
  });

  describe('#getName', () => {
    it('should be defined and be a function', () => {
      should.exist(Provider.getName);
      should(Provider.getName).be.a.Function();
    });

    describe('#getName()', () => {
      it('should be sync return a string', () => {
        const name = Provider.getName();

        should(name).be.a.string;
        should(name).not.containEql('.');
      });
    });
  });

  describe('#getConfigPrefix', () => {
    it('should be defined and be a function', () => {
      should.exist(Provider.getConfigPrefix);
      should(Provider.getConfigPrefix).be.a.Function();
    });

    describe('#getConfigPrefix()', () => {
      it('should be sync return a string', () => {
        const name = Provider.getConfigPrefix();

        should(name).be.a.string;
        should(name).startWith('providers.');
      });
    });
  });

  describe('#init', () => {
    it('should be defined and be a function', () => {
      should.exist(Provider.init);
      should(Provider.init).be.a.Function();
    });

    describe('#init()', () => {
      it('should throw an error if no argument are passed', () => {
        should(Provider.init).throw(Error);
      });
    });

    describe('#init(callback, options)', () => {
      it('should call the callback when arguments are present', (done) => {
        const options = {
          config: {
            has: () => {},
            get: () => {},
            set: () => {},
          },
          app: {
            getPath: () => {},
          },
        };

        Provider.init(done, options);
      });
    });
  });

  describe('#refreshSubscriptions', () => {
    it('should be defined and be a function', () => {
      should.exist(Provider.refreshSubscriptions);
      should(Provider.refreshSubscriptions).be.a.Function();
    });

    describe('#refreshSubscriptions()', () => {
      it('should throw an error if no argument are passed', () => {
        should(Provider.refreshSubscriptions).throw(Error);
      });
    });

    describe('#refreshSubscriptions(callback)', () => {
      it('should call the callback', (done) => {
        Provider.refreshSubscriptions((err) => {
          should.not.exist(err);
          done();
        });
      });
    });
  });

  describe('#refreshVideos', () => {
    it('should be defined and be a function', () => {
      should.exist(Provider.refreshVideos);
      should(Provider.refreshVideos).be.a.Function();
    });

    describe('#refreshVideos()', () => {
      it('should throw an error if no argument are passed', () => {
        should(Provider.refreshVideos).throw(Error);
      });
    });

    describe('#refreshVideos(callback)', () => {
      it('should call the callback', (done) => {
        Provider.refreshVideos((err) => {
          should.not.exist(err);
          done();
        });
      });
    });
  });

  describe('#refreshVideos', () => {
    it('should be defined and be a function', () => {
      should.exist(Provider.refreshVideos);
      should(Provider.refreshVideos).be.a.Function();
    });

    describe('#refreshVideos()', () => {
      it('should throw an error if no argument are passed', () => {
        should(Provider.refreshVideos).throw(Error);
      });
    });

    describe('#refreshVideos(callback)', () => {
      it('should call the callback', (done) => {
        Provider.refreshVideos((err) => {
          should.not.exist(err);
          done();
        });
      });
    });

    describe('#refreshVideos(callback, channel)', () => {
      it('should accept an optional channel parameter', (done) => {
        const channel = { id: 1 };
        Provider.refreshVideos((err) => {
          should.not.exist(err);
          done();
        }, channel);
      });
    });
  });

  describe('#getVideos', () => {
    it('should be defined and be a function', () => {
      should.exist(Provider.getVideos);
      should(Provider.getVideos).be.a.Function();
    });

    describe('#getVideos()', () => {
      it('should throw an error if no argument are passed', () => {
        should(Provider.getVideos).throw(Error);
      });
    });

    describe('#getVideos(callback)', () => {
      it('should call the callback', (done) => {
        Provider.getVideos((err) => {
          should.not.exist(err);
          done();
        });
      });
    });

    describe('#getVideos(callback, channel)', () => {
      it('should accept an optional channel parameter', (done) => {
        const channel = { id: 1 };

        Provider.getVideos((err) => {
          should.not.exist(err);
          done();
        }, channel);
      });
    });
  });

  describe('#getOlderVideos', () => {
    it('should be defined and be a function', () => {
      should.exist(Provider.getOlderVideos);
      should(Provider.getOlderVideos).be.a.Function();
    });

    describe('#getOlderVideos()', () => {
      it('should throw an error if no argument are passed', () => {
        should(Provider.getOlderVideos).throw(Error);
      });
    });

    describe('#getOlderVideos(callback)', () => {
      it('should call the callback', (done) => {
        Provider.getOlderVideos((err) => {
          should.not.exist(err);
          done();
        });
      });
    });

    describe('#getOlderVideos(callback, video)', () => {
      it('should accept an optional video parameter', (done) => {
        const video = { id: 1 };

        Provider.getOlderVideos((err) => {
          should.not.exist(err);
          done();
        }, video);
      });
    });
  });

  describe('#videoProgress', () => {
    it('should be defined and be a function', () => {
      should.exist(Provider.videoProgress);
      should(Provider.videoProgress).be.a.Function();
    });

    describe('#videoProgress()', () => {
      it('should throw an error if no argument are passed', () => {
        should(Provider.videoProgress).throw(Error);
      });
    });

    describe('#videoProgress(callback)', () => {
      it('should throw an error if video or time are not passed', () => {
        const callback = (err) => {
          should(err).exists;
          done();
        };
        const video = { id: 1 };
        const time = '08:00';

        should(Provider.videoProgress.bind(null, callback)).throw(Error);
        should(Provider.videoProgress.bind(null, callback, video)).throw(Error);
        should(Provider.videoProgress.bind(null, callback, null, time)).throw(Error);
      });
    });

    describe('#videoProgress(callback, video, time)', () => {
      it('should only works with video and time parameters', (done) => {
        const video = { id: 1 };
        const time = '08:00';

        Provider.videoProgress((err) => {
          should.not.exist(err);
          done();
        }, video, time);
      });
    });
  });

});
