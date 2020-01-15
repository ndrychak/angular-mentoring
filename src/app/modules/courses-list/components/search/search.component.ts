import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {CoursesStoreActions, RootStoreState} from '@core/store';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'agm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchComponent implements OnInit {
  public searchValue = new FormControl('');

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.searchValue.valueChanges.pipe(
      debounceTime(500),
      filter(value => value.length >= 3 || value.length === 0),
      distinctUntilChanged()
    ).subscribe((value: string) => {
      this.store$.dispatch(new CoursesStoreActions.CoursesRequestAction({
        filterBy: value,
        page: 0
      }));
    });
  }
}
