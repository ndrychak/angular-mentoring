import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let sut;
  let coursesService;

  beforeEach(() => {
    coursesService = {
      filterCourses: jasmine.createSpy('filterCourses')
    };

    sut = new SearchComponent(coursesService);
  });

  describe('#filterCourses', () => {
    it('should use coursesService to trigger observable event', () => {
      sut.findCourse();

      expect(coursesService.filterCourses).toHaveBeenCalled();
    });
  });
});
