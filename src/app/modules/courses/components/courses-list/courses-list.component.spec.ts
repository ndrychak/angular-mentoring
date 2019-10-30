import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CoursesListComponent } from './courses-list.component';

import { TimePipe } from '../../../../shared/pipes/time.pipe';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let consoleSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        TimePipe
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    consoleSpy = spyOn(console, 'log');
  }));

  it('should log message on load more button click', () => {
    const buttonMore = fixture.nativeElement.querySelector('.courses-load-more');

    buttonMore.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(consoleSpy).toHaveBeenCalledWith('load more courses');
  });

  it('should log course id on delete course action', () => {
    component.onDeletedCourse(1);

    expect(consoleSpy).toHaveBeenCalledWith('delete: courseId = 1');
  });
});
