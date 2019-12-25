import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let sut;
  let store$;

  beforeEach(() => {
    store$ = {
      select: jasmine.createSpy('select'),
      dispatch: jasmine.createSpy('dispatch')
    };

    sut = new SearchComponent(store$);

    sut.searchChanged$ = {
      next: jasmine.createSpy('next')
    };
  });

  describe('#onInputChange', () => {
    it('should trigger observable event', () => {
      sut.onInputChange({
        target: {
          value: 'test'
        }
      });

      expect(sut.searchChanged$.next).toHaveBeenCalledWith('test');
    });
  });
});
