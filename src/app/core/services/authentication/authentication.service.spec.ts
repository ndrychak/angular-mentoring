import { AuthService } from './authentication.service';

describe('AuthService', () => {
  let sut;
  let router;

  beforeEach(() => {
    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    sut = new AuthService(router);
  });

  afterEach(() => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('jwtToken');
  });

  describe('#login', () => {
    it('should set localstorage userInfo', () => {
      sut.login({email: 'test', password: 'testPass'});

      expect(localStorage.getItem('userInfo')).toEqual('{"email":"test","password":"testPass"}');
    });
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

