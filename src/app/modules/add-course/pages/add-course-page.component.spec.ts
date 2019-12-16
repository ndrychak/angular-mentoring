import {AddCoursePageComponent} from './add-course-page.component';

describe('AddCoursePageComponent', () => {
  let sut;
  let route;
  let coursesService;
  let cd;

  beforeEach(() => {
    route = {
      params: {
        subscribe: jasmine.createSpy('subscribe')
      }
    };

    coursesService = {
      filterCourses: jasmine.createSpy('filterCourses')
    };

    cd = {
      markForCheck: jasmine.createSpy('markForCheck')
    };

    sut = new AddCoursePageComponent(route, coursesService, cd);
  });

  describe('#ngOnInit', () => {
    it('should subscribe on route change', () => {
      sut.ngOnInit();

      expect(route.params.subscribe).toHaveBeenCalled();
    });
  });
});
