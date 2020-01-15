import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'agm-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateInputComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: DateInputComponent,
    multi: true
  }]
})

export class DateInputComponent implements ControlValueAccessor {
  @Input() formControl: FormControl;

  constructor(private cd: ChangeDetectorRef) {}

  changeDate($event) {
    this.writeValue($event.target.value);
    this.onTouched();
  }

  validate(control: FormControl) {
    this.cd.markForCheck();

    if (!control.value) {
      return {
        invalid: true,
        required: true
      };
    }
  }

  onChange = (value: any) => {};
  onTouched = () => {};

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value: any) {
    this.onChange(value);
  }
}
