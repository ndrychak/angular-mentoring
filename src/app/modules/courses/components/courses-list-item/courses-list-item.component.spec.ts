import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ICoursesListItem } from '../../models/courses-list-item';
import { CoursesListItemComponent } from './courses-list-item.component';
import { TimePipe } from '../../../../shared/pipes/time.pipe';

describe('CoursesListItemComponent', () => {
  let component: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;
  let consoleSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListItemComponent,
        TimePipe
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const coursesListItem: ICoursesListItem = {
      id: 1,
      title: 'test',
      creationDate: new Date('2019-08-15T13:45:30'),
      duration: 1,
      description: 'test'
    };

    fixture = TestBed.createComponent(CoursesListItemComponent);
    component = fixture.componentInstance;
    component.coursesListItem = coursesListItem;
    fixture.detectChanges();

    consoleSpy = spyOn(console, 'log');
  });

  it('should emit on click', () => {
    const deletedCourseSpy = spyOn(component.deletedCourse, 'emit');
    const buttonDelete = fixture.nativeElement.querySelector('.button-delete');

    buttonDelete.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(deletedCourseSpy).toHaveBeenCalledWith(1);
  });

  it('should log message', () => {
    component.editCourse();

    expect(consoleSpy).toHaveBeenCalledWith('edit course');
  });
});
