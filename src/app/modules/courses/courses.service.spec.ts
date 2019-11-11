import { of } from 'rxjs';
import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let coursesService;

  beforeEach(() => {
    const mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    const mockFilerPipe = jasmine.createSpyObj('mockFilerPipe', ['transform']);

    mockHttp.get.and.callFake(() => {
      return of([]);
    });

    coursesService = new CoursesService(mockHttp, mockFilerPipe);
  });

  it('should preform request to get courses list', () => {
    coursesService.getCourses();

    expect(coursesService.http.get).toHaveBeenCalled();
  });
});

