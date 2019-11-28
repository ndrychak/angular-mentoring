import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'agm-course-duration-input',
  templateUrl: './course-duration-input.component.html',
  styleUrls: ['./course-duration-input.component.styl']
})

export class CourseDurationInputComponent implements OnChanges {
  @Input() duration: number;
  @Output() durationValue = new EventEmitter<number>();

  constructor() { }

  ngOnChanges() {
    this.durationValue.emit(this.duration);
  }

  modelChanged(duration) {
    this.durationValue.emit(duration);
  }
}
