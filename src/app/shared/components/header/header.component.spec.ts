import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let sut;
  let store$;
  let translate;

  beforeEach(() => {
    store$ = {
      select: jasmine.createSpy('select'),
      dispatch: jasmine.createSpy('dispatch')
    };

    translate = {
      get: jasmine.createSpy('get'),
      onLangChange: jasmine.createSpy('onLangChange')
    };

    sut = new HeaderComponent(store$, translate);
  });

  describe('#logout', () => {
    it('should dispatch action', () => {
      sut.logout();

      expect(store$.dispatch).toHaveBeenCalled();
    });
  });
});

