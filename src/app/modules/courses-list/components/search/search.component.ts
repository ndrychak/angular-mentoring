import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {CoursesStoreActions, RootStoreState} from '@core/store';

@Component({
  selector: 'agm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchComponent implements OnInit, OnDestroy {
  private searchChanged$ = new Subject<string>();

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.searchChanged$
      .pipe(
        debounceTime(500),
        filter(value => value.length >= 3 || value.length === 0),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.store$.dispatch(new CoursesStoreActions.CoursesRequestAction({
          filterBy: value,
          page: 0
        }));
      });
  }

  ngOnDestroy() {
    this.searchChanged$.unsubscribe();
  }

  onInputChange($event) {
    this.searchChanged$.next($event.target.value);
  }
}
