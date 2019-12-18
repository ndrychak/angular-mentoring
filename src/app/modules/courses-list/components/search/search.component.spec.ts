import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let sut;
  let coursesService;

  beforeEach(() => {
    coursesService = {
      filterCourses: jasmine.createSpy('filterCourses')
    };

    sut = new SearchComponent(coursesService);

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
