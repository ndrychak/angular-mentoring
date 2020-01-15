import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'agm-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationInputComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: DurationInputComponent,
    multi: true
  }]
})

export class DurationInputComponent implements ControlValueAccessor {
  @Input() formControl: FormControl;

  constructor(private cd: ChangeDetectorRef) {}

  changeDuration($event) {
    this.writeValue($event.target.value);
    this.onTouched();
  }

  validate(control: FormControl) {
    const reg = new RegExp('^[1-9]+$');

    this.cd.markForCheck();

    if (!control.value) {
      return {
        invalid: true,
        required: true
      };
    } else if (!reg.test(control.value)) {
      return {
        invalid: true,
        number: true
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
