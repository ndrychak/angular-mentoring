import { CoursesItemFormComponent } from './courses-item-form.component';

describe('CoursesItemFormComponent', () => {
  let sut;
  let router;
  let store$;

  beforeEach(() => {
    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    store$ = {
      select: jasmine.createSpy('select'),
      dispatch: jasmine.createSpy('dispatch')
    };

    sut = new CoursesItemFormComponent(router, store$);

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

      expect(store$.dispatch).toHaveBeenCalled();
    });

    it('should call updateItem method of courses service', () => {
      sut.isEditForm = true;

      sut.save({value: {}});

      expect(store$.dispatch).toHaveBeenCalled();
    });
  });
});

