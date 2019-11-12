import { CoursesListItemComponent } from './courses-list-item.component';

describe('CoursesListItemComponent', () => {
  let component;
  let deletedCourseSpy;

  beforeEach(() => {
    component = new CoursesListItemComponent();

    component.coursesListItem = {
      id: 42,
      title: 'test title',
      creationDate: '2019-08-15T13:45:30',
      duration: 100,
      topRated: false,
      description: 'test info'
    };
  });

  afterEach(() => {
    component = null;
  });

  it('should call emitter with number', () => {
    deletedCourseSpy = spyOn(component.deletedCourse, 'emit');

    component.deleteButtonHandler();

    expect(component.deletedCourse.emit).toHaveBeenCalledWith(42);
  });
});
