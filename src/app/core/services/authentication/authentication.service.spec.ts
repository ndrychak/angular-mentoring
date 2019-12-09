import { AuthService } from './authentication.service';

describe('AuthService', () => {
  let sut;
  let router;
  let http;

  beforeEach(() => {
    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    http = {
      get: jasmine.createSpy('get'),
      post: jasmine.createSpy('post'),
      patch: jasmine.createSpy('patch'),
      delete: jasmine.createSpy('delete')
    };

    sut = new AuthService(router, http);
  });

  afterEach(() => {
    localStorage.removeItem('userInfo');
  });

  describe('#logout', () => {
    it('should remove localstorage userInfo', () => {
      localStorage.setItem('userInfo', '{"email": "test", "password": "testPass"}');

      sut.logout();

      expect(localStorage.getItem('userInfo')).toEqual(null);
    });
  });

  describe('#isAuthenticated', () => {
    it('should return false when user not authenticated', () => {
      expect(sut.isAuthenticated()).toEqual(false);
    });
  });

  describe('#getUserInfo', () => {
    it('should return object with email and password', () => {
      localStorage.setItem('userInfo', '{"email": "test", "password": "testPass"}');

      expect(sut.getUserInfo()).toEqual({email: 'test', password: 'testPass'});
    });
  });
});

