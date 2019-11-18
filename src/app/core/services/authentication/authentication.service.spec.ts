import { AuthService } from './authentication.service';

describe('AuthService', () => {
  let authService;

  beforeEach(() => {
    const mockRouter = jasmine.createSpyObj('mockRouter', ['navigateByUrl']);

    authService = new AuthService(mockRouter);
  });

  afterEach(() => {
    authService = null;

    localStorage.removeItem('userInfo');
    localStorage.removeItem('jwtToken');
  });

  it('should return false when user not authenticated', () => {
    expect(authService.isAuthenticated()).toEqual(false);
  });

  it('should return object with email and password', () => {
    localStorage.setItem('userInfo', '{"email": "test", "password": "testPass"}');

    expect(authService.getUserInfo()).toEqual({email: 'test', password: 'testPass'});
  });

  it('should remove localstorage userInfo', () => {
    localStorage.setItem('userInfo', '{"email": "test", "password": "testPass"}');

    authService.logout();

    expect(localStorage.getItem('userInfo')).toEqual(null);
  });

  it('should set localstorage userInfo', () => {
    authService.login({email: 'test', password: 'testPass'});

    expect(localStorage.getItem('userInfo')).toEqual('{"email":"test","password":"testPass"}');
  });
});

