import { DateInputComponent } from './date-input.component';

describe('DateInputComponent', () => {
  let sut;
  let cd;

  beforeEach(() => {
    cd = {
      markForCheck: jasmine.createSpy('markForCheck')
    };

    sut = new DateInputComponent(cd);

    sut.date = '2019-10-22';

    sut.dateValue = {
      emit: jasmine.createSpy('emit')
    };
  });
});

