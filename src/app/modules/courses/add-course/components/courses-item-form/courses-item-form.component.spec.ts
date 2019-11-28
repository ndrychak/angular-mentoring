import { CoursesItemFormComponent } from './courses-item-form.component';

describe('CoursesItemFormComponent', () => {
  let sut;
  let coursesService;

  beforeEach(() => {
    coursesService = {
      createItem: jasmine.createSpy('createItem')
    };

    sut = new CoursesItemFormComponent(coursesService);

    sut.form = {
      title: '',
      description: '',
      creationDate: '',
      duration: 0
    };
  });

  describe('#setDuration', () => {
    it('should set form property: duration', () => {
      sut.setDuration(12);

      expect(sut.form.duration).toEqual(12);
    });
  });

  describe('#setCreationDate', () => {
    it('should set form property: creationDate', () => {
      sut.setCreationDate('2019-11-05');

      expect(sut.form.creationDate).toEqual('2019-11-05');
    });
  });

  describe('#save', () => {
    it('should send form data to courses service', () => {
      sut.form = {
        date: '2019-12-12',
        duration: 44
      };

      sut.save({
        value: {
          title: 'test',
          description: 'test'
        }
      });

      expect(coursesService.createItem).toHaveBeenCalledWith({
        title: 'test',
        description: 'test',
        date: '2019-12-12',
        duration: 44
      });
    });
  });
});

