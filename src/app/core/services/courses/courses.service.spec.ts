import { CoursesService } from './courses.service';
import {environment} from '../../../../environments/environment';
import {INewCourse} from '../../../modules/add-course/models/new-course';

describe('CoursesService', () => {
  let sut;
  let http;
  const testCourse: INewCourse = {
    id: 11,
    name: 'test',
    date: '2010-11-11',
    length: 222,
    description: '',
    authors: [],
    isTopRated: false
  };

  beforeEach(() => {
    http = {
      get: jasmine.createSpy('get'),
      post: jasmine.createSpy('post'),
      patch: jasmine.createSpy('patch'),
      delete: jasmine.createSpy('delete')
    };

    sut = new CoursesService(http);

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

  describe('#getItem', () => {
    it('should request course by id', () => {
      sut.getItem(2);

      expect(sut.http.get).toHaveBeenCalledWith(environment.URLS.COURSES + 2);
    });
  });

  describe('#createItem', () => {
    it('should send post request with course data', () => {
      sut.createItem(testCourse);

      expect(sut.http.post).toHaveBeenCalledWith(environment.URLS.COURSES, testCourse);
    });
  });

  describe('#updateItem', () => {
    it('should send patch request with course data', () => {
      sut.updateItem(testCourse);

      expect(sut.http.patch).toHaveBeenCalledWith(environment.URLS.COURSES + testCourse.id, testCourse);
    });
  });

  describe('#deleteItem', () => {
    it('should send delete request with course data', () => {
      sut.deleteItem(11);

      expect(sut.http.delete).toHaveBeenCalledWith(environment.URLS.COURSES + 11);
    });
  });
});

