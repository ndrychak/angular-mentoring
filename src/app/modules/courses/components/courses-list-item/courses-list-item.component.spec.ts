import { CoursesListItemComponent } from './courses-list-item.component';

describe('CoursesListItemComponent', () => {
  let component;
  let mockCoursesService;
  let dialogMock;

  beforeEach(() => {
    mockCoursesService = jasmine.createSpyObj('mockCoursesService', ['updateItem']);
    dialogMock = jasmine.createSpyObj('dialogMock', ['open']);

    component = new CoursesListItemComponent(mockCoursesService, dialogMock);

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

  it('should use coursesService to update item', () => {
    component.editCourse();

    expect(mockCoursesService.updateItem).toHaveBeenCalledWith(42);
  });
});
