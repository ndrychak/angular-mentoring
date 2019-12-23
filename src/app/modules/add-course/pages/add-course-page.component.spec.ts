import {AddCoursePageComponent} from './add-course-page.component';

describe('AddCoursePageComponent', () => {
  let sut;
  let route;
  let store$;

  beforeEach(() => {
    route = {
      params: {
        subscribe: jasmine.createSpy('subscribe')
      }
    };

    store$ = {
      select: jasmine.createSpy('select'),
      dispatch: jasmine.createSpy('dispatch')
    };

    sut = new AddCoursePageComponent(route, store$);
  });

  describe('#ngOnInit', () => {
    it('should subscribe on route change', () => {
      sut.ngOnInit();

      expect(route.params.subscribe).toHaveBeenCalled();
    });
  });
});
