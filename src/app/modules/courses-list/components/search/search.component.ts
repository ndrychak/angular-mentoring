import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {CoursesService} from '../../../../core/services/courses/courses.service';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';

@Component({
  selector: 'agm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchComponent implements OnInit, OnDestroy {
  private searchChanged$ = new Subject<string>();

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.searchChanged$
      .pipe(
        debounceTime(500),
        filter(value => value.length >= 3 || value.length === 0),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.coursesService.filterCourses(value);
      });
  }

  ngOnDestroy() {
    this.searchChanged$.unsubscribe();
  }

  onInputChange($event) {
    this.searchChanged$.next($event.target.value);
  }
}
