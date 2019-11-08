import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let coursesService;
  let filterValueSpy;

  beforeEach(() => {
    const mockHttp = jasmine.createSpyObj(['get']);

    coursesService = new CoursesService(mockHttp);
  });

  it('should preform request to get courses list', () => {
    coursesService.getCourses();

    expect(coursesService.http.get).toHaveBeenCalled();
  });

  it('should trigger observable event', () => {
    filterValueSpy = spyOn(coursesService.filterValue, 'next');

    coursesService.setFilterValue('test');

    expect(coursesService.filterValue.next).toHaveBeenCalledWith('test');
  });
});

