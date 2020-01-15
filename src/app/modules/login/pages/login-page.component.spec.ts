import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let sut;
  let store$;
  let formBuilder;

  beforeEach(() => {
    store$ = {
      select: jasmine.createSpy('select'),
      dispatch: jasmine.createSpy('dispatch')
    };

    formBuilder = {
      group: jasmine.createSpy('group')
    };

    sut = new LoginPageComponent(store$, formBuilder);
  });
});

