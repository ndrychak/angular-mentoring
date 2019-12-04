import { CoursesListComponent } from './courses-list.component';
import { of } from 'rxjs';

describe('CoursesListComponent', () => {
  let sut;
  let coursesService;
  let dialog;

  const deleteCourseId = 3;

  const coursesListItem = {
    id: 42,
    title: 'test title',
    creationDate: '2019-08-15T13:45:30',
    duration: 100,
    topRated: false,
    description: 'test info'
  };

  beforeEach(() => {
    coursesService = {
      updateItem: jasmine.createSpy('updateItem'),
      removeItem: jasmine.createSpy('removeItem'),
    };

    dialog = {
      open: jasmine.createSpy('open').and
        .returnValue({
          afterClosed: () => {
            return of({deleteCourseId});
          }
        })
    };

    sut = new CoursesListComponent(coursesService, dialog);
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
});
