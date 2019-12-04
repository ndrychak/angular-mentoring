import { CoursesListItemComponent } from './courses-list-item.component';

describe('CoursesListItemComponent', () => {
  let sut;
  let coursesService;

  beforeEach(() => {
    coursesService = {
      updateItem: jasmine.createSpy('updateItem'),
      removeItem: jasmine.createSpy('removeItem'),
    };

    sut = new CoursesListItemComponent(coursesService);

    sut.deletedCourse = {
      emit: jasmine.createSpy('emit'),
    };

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
    it('should remove item', () => {
      sut.deleteButtonHandler();

      expect(sut.deletedCourse.emit).toHaveBeenCalledWith(sut.coursesListItem);
    });
  });
});
