import {DurationInputComponent} from './duration-input.component';

describe('DurationInputComponent', () => {
  let sut;
  let cd;
  let translate;

  beforeEach(() => {
    cd = {
      markForCheck: jasmine.createSpy('markForCheck')
    };

    translate = {
      get: jasmine.createSpy('get'),
      onLangChange: jasmine.createSpy('onLangChange')
    };

    sut = new DurationInputComponent(cd, translate);

    sut.duration = 22;

    sut.durationValue = {
      emit: jasmine.createSpy('emit')
    };
  });
});

