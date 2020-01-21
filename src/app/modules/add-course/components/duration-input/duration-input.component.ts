import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';

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

export class DurationInputComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() formControl: FormControl;

  private translateSubscription: Subscription;
  public locale: string;

  constructor(
    private cd: ChangeDetectorRef,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.locale = this.translate.currentLang;

    this.translateSubscription = this.translate.onLangChange.subscribe((langChangeEvent: LangChangeEvent) => {
      this.locale = langChangeEvent.lang;
    });
  }

  ngOnDestroy(): void {
    this.translateSubscription.unsubscribe();
  }

  changeDuration($event): void {
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
