import { CoursesItemFormComponent } from './courses-item-form.component';
import {of} from 'rxjs';

describe('CoursesItemFormComponent', () => {
  let sut;
  let coursesService;
  let router;

  beforeEach(() => {
    coursesService = {
      createItem: jasmine.createSpy('createItem').and.callFake(() => {
        return of([]);
      }),
      updateItem: jasmine.createSpy('updateItem').and.callFake(() => {
        return of([]);
      })
    };

    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    sut = new CoursesItemFormComponent(coursesService, router);

    sut.courseItem = {
      id: 1111,
      isTopRated: false,
      authors: []
    };

    sut.form = {};
  });

  describe('#setDuration', () => {
    it('should set form property: duration', () => {
      sut.setDuration(12);

      expect(sut.form.length).toEqual(12);
    });
  });

  describe('#setCreationDate', () => {
    it('should set form property: creationDate', () => {
      sut.setCreationDate('2019-11-05');

      expect(sut.form.date).toEqual('2019-11-05');
    });
  });

  describe('#save', () => {
    it('should call createItem method of courses service', () => {
      sut.isEditForm = false;

      sut.save({value: {}});

      expect(coursesService.createItem).toHaveBeenCalled();
    });

    it('should call updateItem method of courses service', () => {
      sut.isEditForm = true;

      sut.save({value: {}});

      expect(coursesService.updateItem).toHaveBeenCalled();
    });
  });
});

