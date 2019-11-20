import { CoursesListItemComponent } from './courses-list-item.component';
import { of } from 'rxjs';

describe('CoursesListItemComponent', () => {
  let sut;
  let coursesService;
  let dialog;

  const deleteCourseId = 3;

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

    sut = new CoursesListItemComponent(coursesService, dialog);

    sut.coursesListItem = {
      id: 42,
      title: 'test title',
      creationDate: '2019-08-15T13:45:30',
      duration: 100,
      topRated: false,
      description: 'test info'
    };
  });

  describe('#editCourse', () => {
    it('should use coursesService to update item', () => {
      sut.editCourse();

      expect(coursesService.updateItem).toHaveBeenCalledWith(42);
    });
  });

  describe('#deleteButtonHandler', () => {
    it('should open popup', () => {
      sut.deleteButtonHandler();

      expect(dialog.open).toHaveBeenCalled();
    });

    it('should remove item', () => {
      sut.deleteButtonHandler();

      expect(coursesService.removeItem).toHaveBeenCalledWith(deleteCourseId);
    });
  });
});
