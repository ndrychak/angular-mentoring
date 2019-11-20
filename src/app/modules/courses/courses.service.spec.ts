import { CoursesService } from './courses.service';
import { of } from 'rxjs';

describe('CoursesService', () => {
  let sut;
  let http;
  let filterPipe;

  beforeEach(() => {
    http = {
      get: jasmine.createSpy('get').and.callFake(() => {
        return of([]);
      })
    };

    filterPipe = {
      transform: jasmine.createSpy('transform')
    };

    sut = new CoursesService(http, filterPipe);

    sut.coursesListSubject = {
      next: jasmine.createSpy('next')
    };
  });

  describe('#getList', () => {
    it('should preform request to get courses list', () => {
      sut.getList();

      expect(sut.http.get).toHaveBeenCalled();
    });
  });

  describe('#removeItem', () => {
    it('should trigger observable with filtered array', () => {
      sut.allCourses = [{id: 3}, {id: 5}, {id: 2}];

      sut.removeItem(5);

      expect(sut.coursesListSubject.next).toHaveBeenCalledWith([{id: 3}, {id: 2}]);
    });
  });

});

