import { DateInputComponent } from './date-input.component';

describe('DateInputComponent', () => {
  let sut;
  let cd;
  let translate;
  let adapter;

  beforeEach(() => {
    cd = {
      markForCheck: jasmine.createSpy('markForCheck')
    };

    translate = {
      get: jasmine.createSpy('get'),
      onLangChange: jasmine.createSpy('onLangChange')
    };

    adapter = {
      setLocale: jasmine.createSpy('setLocale')
    };

    sut = new DateInputComponent(cd, translate, adapter);

    sut.date = '2019-10-22';

    sut.dateValue = {
      emit: jasmine.createSpy('emit')
    };
  });
});

