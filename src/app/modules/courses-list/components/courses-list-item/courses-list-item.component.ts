import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

import {ICoursesListItem} from '@core/models/courses-list-item';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'agm-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesListItemComponent implements OnInit, OnDestroy {
  @Input() coursesListItem: ICoursesListItem;
  @Output() deletedCourse = new EventEmitter<ICoursesListItem>();

  private translateSubscription: Subscription;
  public locale: string;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.locale = this.translate.currentLang;

    this.translateSubscription = this.translate.onLangChange.subscribe((langChangeEvent: LangChangeEvent) => {
      this.locale = langChangeEvent.lang;
    });
  }

  ngOnDestroy(): void {
    this.translateSubscription.unsubscribe();
  }

  deleteButtonHandler(): void {
    this.deletedCourse.emit(this.coursesListItem);
  }
}
