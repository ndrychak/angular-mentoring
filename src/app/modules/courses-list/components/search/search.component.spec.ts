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
});
