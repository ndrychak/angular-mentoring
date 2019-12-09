import { CoursesListItemComponent } from './courses-list-item.component';

describe('CoursesListItemComponent', () => {
  let sut;

  beforeEach(() => {
    sut = new CoursesListItemComponent();

    sut.deletedCourse = {
      emit: jasmine.createSpy('emit'),
    };

    sut.coursesListItem = {
      id: 42,
      title: 'test title',
      creationDate: '2019-08-15T13:45:30',
      duration: 100,
      isTopRated: false,
      description: 'test info'
    };
  });

  describe('#deleteButtonHandler', () => {
    it('should remove item', () => {
      sut.deleteButtonHandler();

      expect(sut.deletedCourse.emit).toHaveBeenCalledWith(sut.coursesListItem);
    });
  });
});
