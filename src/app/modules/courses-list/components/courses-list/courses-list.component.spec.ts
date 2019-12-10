import { CoursesListComponent } from './courses-list.component';
import { of } from 'rxjs';

describe('CoursesListComponent', () => {
  let sut;
  let coursesService;
  let dialog;
  let cd;

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
    coursesService = {
      updateItem: jasmine.createSpy('updateItem'),
      removeItem: jasmine.createSpy('removeItem'),
      getList: jasmine.createSpy('getList').and.callFake(() => {
        return of([]);
      })
    };

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

    sut = new CoursesListComponent(coursesService, dialog, cd);
  });

  describe('#onDeletedCourse', () => {
    it('should open popup', () => {
      sut.onDeletedCourse(coursesListItem);

      expect(dialog.open).toHaveBeenCalled();
    });

    it('should remove item', () => {
      sut.onDeletedCourse(coursesListItem);

      expect(coursesService.removeItem).toHaveBeenCalledWith(deleteCourseId);
    });
  });

  describe('#loadMore', () => {
    it('should call coursesService getList method', () => {
      sut.page = 3;

      sut.loadMore();

      expect(coursesService.getList).toHaveBeenCalledWith(3);
    });
  });
});
