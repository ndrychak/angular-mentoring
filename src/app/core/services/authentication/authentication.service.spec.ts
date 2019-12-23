import {AuthService} from './authentication.service';
import {environment} from '../../../../environments/environment';

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
    localStorage.removeItem('token');
  });

  describe('#logout', () => {
    it('should remove localstorage userInfo', () => {
      localStorage.setItem('userInfo', '{"email": "test", "password": "testPass"}');

      sut.logout();

      expect(localStorage.getItem('userInfo')).toEqual(null);
    });
  });

  describe('#requestUserInfo', () => {
    it('should make post request', () => {
      localStorage.setItem('token', '1234');

      sut.requestUserInfo();

      expect(http.post).toHaveBeenCalledWith(environment.URLS.USER_INFO, {token: '1234'});
    });
  });
});

