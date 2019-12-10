import { DurationInputComponent } from './duration-input.component';

describe('DurationInputComponent', () => {
  let sut;

  beforeEach(() => {
    sut = new DurationInputComponent();

    sut.duration = 22;

    sut.durationValue = {
      emit: jasmine.createSpy('emit')
    };
  });

  describe('#ngOnChanges', () => {
    it('should call emit to pass data outside', () => {
      sut.ngOnChanges();

      expect(sut.durationValue.emit).toHaveBeenCalledWith(sut.duration);
    });
  });

  describe('#modelChanged', () => {
    it('should call emit to pass data outside', () => {
      sut.modelChanged(10);

      expect(sut.durationValue.emit).toHaveBeenCalledWith(10);
    });
  });
});

