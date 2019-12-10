import { DateInputComponent } from './date-input.component';

describe('DateInputComponent', () => {
  let sut;

  beforeEach(() => {
    sut = new DateInputComponent();

    sut.date = '2019-10-22';

    sut.dateValue = {
      emit: jasmine.createSpy('emit')
    };
  });

  describe('#ngOnChanges', () => {
    it('should call emit to pass data outside', () => {
      sut.ngOnChanges();

      expect(sut.dateValue.emit).toHaveBeenCalledWith(sut.date);
    });
  });

  describe('#modelChanged', () => {
    it('should call emit to pass data outside', () => {
      sut.modelChanged('2019-01-01');

      expect(sut.dateValue.emit).toHaveBeenCalledWith('2019-01-01');
    });
  });
});

