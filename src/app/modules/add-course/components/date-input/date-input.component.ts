import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'agm-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DateInputComponent implements OnChanges {
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
