import {DurationInputComponent} from './duration-input.component';

describe('DurationInputComponent', () => {
  let sut;
  let cd;

  beforeEach(() => {
    cd = {
      markForCheck: jasmine.createSpy('markForCheck')
    };

    sut = new DurationInputComponent(cd);

    sut.duration = 22;

    sut.durationValue = {
      emit: jasmine.createSpy('emit')
    };
  });
});

