import { CoursesListComponent } from './courses-list.component';
import { of } from 'rxjs';

describe('CoursesListComponent', () => {
  let sut;
  let dialog;
  let cd;
  let store$;

  const deleteCourseId = 3;

  const coursesListItem = {
    id: 42,
    name: 'test title',
    date: '2019-08-15T13:45:30',
    length: 100,
    isTopRated: false,
    description: 'test info',
    authors: []
  };

  beforeEach(() => {
    dialog = {
      open: jasmine.createSpy('open').and
        .returnValue({
          afterClosed: () => {
            return of({deleteCourseId});
          }
        })
    };

    cd = {
      markForCheck: jasmine.createSpy('markForCheck')
    };

    store$ = {
      select: jasmine.createSpy('select'),
      dispatch: jasmine.createSpy('dispatch')
    };

    sut = new CoursesListComponent(dialog, cd, store$);
  });

  describe('#onDeletedCourse', () => {
    it('should open popup', () => {
      sut.onDeletedCourse(coursesListItem);

      expect(dialog.open).toHaveBeenCalled();
    });

    it('should remove item', () => {
      sut.onDeletedCourse(coursesListItem);

      expect(store$.dispatch).toHaveBeenCalled();
    });
  });

  describe('#loadMore', () => {
    it('should call coursesService getList method', () => {
      sut.loadMore();

      expect(store$.dispatch).toHaveBeenCalled();
    });
  });
});
