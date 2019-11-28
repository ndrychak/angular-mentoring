import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'agm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FooterComponent {}
