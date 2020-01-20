import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {DateAdapter} from '@angular/material';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';

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

export class DateInputComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() formControl: FormControl;

  private translateSubscription: Subscription;

  constructor(
    private cd: ChangeDetectorRef,
    private translate: TranslateService,
    private adapter: DateAdapter<any>
  ) {}

  ngOnInit(): void {
    this.translateSubscription = this.translate.onLangChange.subscribe((langChangeEvent: LangChangeEvent) => {
      this.adapter.setLocale(langChangeEvent.lang);
    });
  }

  ngOnDestroy(): void {
    this.translateSubscription.unsubscribe();
  }

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
