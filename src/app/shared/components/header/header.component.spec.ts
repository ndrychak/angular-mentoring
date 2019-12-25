import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let sut;
  let store$;

  beforeEach(() => {
    store$ = {
      select: jasmine.createSpy('select'),
      dispatch: jasmine.createSpy('dispatch')
    };

    sut = new HeaderComponent(store$);
  });

  describe('#logout', () => {
    it('should dispatch action', () => {
      sut.logout();

      expect(store$.dispatch).toHaveBeenCalled();
    });
  });
});

