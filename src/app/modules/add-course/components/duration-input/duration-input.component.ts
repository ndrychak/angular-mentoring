import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'agm-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DurationInputComponent implements OnChanges {
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
