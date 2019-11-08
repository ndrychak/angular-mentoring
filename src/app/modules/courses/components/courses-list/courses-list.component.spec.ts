import { CoursesListComponent } from './courses-list.component';

describe('CoursesListComponent', () => {
  let component;
  let mockCoursesService;
  let mockFilterPipe;

  const course1 = {
    id: 42,
    title: 'aaa',
    creationDate: '2019-08-15T13:45:30',
    duration: 100,
    topRated: false,
    description: 'test info'
  };

  beforeEach(() => {
    mockCoursesService = jasmine.createSpyObj(['filterState', 'getCourses']);
    mockFilterPipe = jasmine.createSpyObj(['transform']);

    component = new CoursesListComponent(mockCoursesService, mockFilterPipe);

    component.allCourses = [course1];
  });

  afterEach(() => {
    component = null;
  });

  it('should call filter pipe to filter courses', () => {
    component.filterCourses('aaa');

    expect(component.filterPipe.transform).toHaveBeenCalledWith(component.allCourses, 'title', 'aaa');
  });
});
