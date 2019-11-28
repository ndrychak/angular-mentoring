import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'agm-course-date-input',
  templateUrl: './course-date-input.component.html',
  styleUrls: ['./course-date-input.component.styl']
})

export class CourseDateInputComponent implements OnChanges {
  @Input() date: string;
  @Output() dateValue = new EventEmitter<string>();

  constructor() { }

  ngOnChanges() {
    this.dateValue.emit(this.date);
  }

  modelChanged(date) {
    this.dateValue.emit(date);
  }
}
