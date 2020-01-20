import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseItemStoreSelectors, RootStoreState} from '@core/store';
import {Store} from '@ngrx/store';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {forkJoin, of, Subscription} from 'rxjs';

@Component({
  selector: 'agm-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BreadcrumbsComponent implements OnInit {
  private translateSubscription: Subscription;
  public breadcrumbs: Array<{title?: string; url?: string; dynamicCourseTitle?: boolean}>;
  public courseTitle;

  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private store$: Store<RootStoreState.State>,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.translateSubscription = this.translate.onLangChange.subscribe((langChangeEvent: LangChangeEvent) => {
      this.buildBreadcrumbs();
      this.cd.markForCheck();
    });

    this.buildBreadcrumbs();
  }

  buildBreadcrumbs() {
    const breadcrumbTitles = [];
    const breadcrumbUrls = [];

    this.route.pathFromRoot.forEach(item => { // get url data as tree
      if (item.snapshot.routeConfig && item.snapshot.routeConfig.data && item.snapshot.routeConfig.data.breadcrumb) {
        const breadcrumb = item.snapshot.routeConfig.data.breadcrumb;

        if (breadcrumb.dynamicCourseTitle) {
          breadcrumbTitles.push(of({dynamicCourseTitle: true}));
          this.loadDynamicCourseTitle();
        } else {
          breadcrumbUrls.push(item.snapshot.routeConfig.path);
          breadcrumbTitles.push(this.translate.get(breadcrumb.title));
        }
      }
    });

    forkJoin(breadcrumbTitles).subscribe(titles => {
      const breadcrumbs = [];

      titles.forEach((item, index) => {
        breadcrumbs.push({
          url: breadcrumbUrls[index],
          title: item,
          dynamicCourseTitle: !!item.dynamicCourseTitle
        });
      });

      this.breadcrumbs = breadcrumbs;
    });
  }

  /**
   * find breadcrumb that needs dynamic title. request title. set title and refresh view
   */
  loadDynamicCourseTitle() {
    this.route.params.subscribe(routerParams => {
      if (routerParams.courseId) {
         this.store$.select(CourseItemStoreSelectors.selectCourseItem).subscribe(courseItem => {
           if (courseItem) {
             this.courseTitle = courseItem.name;
             this.cd.markForCheck();
           }
         });
      }
    });
  }
}
