import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';

import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {AuthorsStoreActions, AuthorsStoreSelectors, RootStoreState} from '@core/store';
import {Store} from '@ngrx/store';
import {IAuthor} from '@core/models/author';
import {MatAutocompleteSelectedEvent} from '@angular/material';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'agm-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthorsInputComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: AuthorsInputComponent,
    multi: true
  }]
})

export class AuthorsInputComponent implements ControlValueAccessor, OnInit {
  @Input() formControl: FormControl;

  public filterInputControl = new FormControl('');
  public filteredAuthors: IAuthor[];
  public allAuthors: IAuthor[];

  constructor(
    private cd: ChangeDetectorRef,
    private store$: Store<RootStoreState.State>
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(new AuthorsStoreActions.AuthorsRequestAction());

    this.store$.select(AuthorsStoreSelectors.selectAuthors).subscribe((authors: IAuthor[]) => {
      this.allAuthors = authors;
      this.filteredAuthors = authors;
    });

    this.filterSuggestions();
  }

  filterSuggestions() {
    this.filterInputControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((value: string) => {
      if (!value) {
        value = '';
      }

      const filterValue = value.toLowerCase();

      this.filteredAuthors = this.allAuthors.filter((author: IAuthor) => author.name.toLowerCase().indexOf(filterValue) === 0);

      this.cd.markForCheck();
    });
  }

  changeValue(val) {
    this.writeValue(val);
    this.onTouched();
  }

  remove(idx): void {
    const arrCopy = this.formControl.value.slice(0);

    arrCopy.splice(idx, 1);

    this.changeValue(arrCopy);
  }

  add(event): void {
    if (event.value.trim()) {
      const arrCopy = this.formControl.value ? this.formControl.value.slice(0) : [];

      arrCopy.push({name: event.value});

      this.changeValue(arrCopy);
    }

    this.filterInputControl.reset();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.add({value: event.option.viewValue});
  }

  validate(control: FormControl) {
    this.cd.markForCheck();

    if (!control.value || (control.value && !control.value.length)) {
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
