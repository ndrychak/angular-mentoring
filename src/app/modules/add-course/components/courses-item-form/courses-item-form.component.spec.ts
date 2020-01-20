import {CoursesItemFormComponent} from './courses-item-form.component';

describe('CoursesItemFormComponent', () => {
  let sut;
  let router;
  let store$;
  let formBuilder;
  let translate;

  beforeEach(() => {
    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    store$ = {
      select: jasmine.createSpy('select'),
      dispatch: jasmine.createSpy('dispatch')
    };

    formBuilder = {
      group: jasmine.createSpy('group')
    };

    translate = {
      get: jasmine.createSpy('get'),
      onLangChange: jasmine.createSpy('onLangChange')
    };

    sut = new CoursesItemFormComponent(router, store$, formBuilder, translate);

    sut.courseItem = {
      id: 1111,
      isTopRated: false,
      authors: []
    };

    sut.form = {};
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

