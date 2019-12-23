import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let sut;
  let store$;

  beforeEach(() => {
    store$ = {
      select: jasmine.createSpy('select'),
      dispatch: jasmine.createSpy('dispatch')
    };

    sut = new LoginPageComponent(store$);
  });

  describe('#loginUser', () => {
    it('should dispatch event', () => {
      sut.loginUser({
        value: {
          email: 'test@test.com',
          password: 'pass'
        }
      });

      expect(store$.dispatch).toHaveBeenCalled();
    });
  });
});

