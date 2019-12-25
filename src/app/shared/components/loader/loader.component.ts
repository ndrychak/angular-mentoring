import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Subject} from 'rxjs';

import {LoaderService} from '@core/services/loader/loader.service';

@Component({
  selector: 'agm-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoaderComponent {
  isLoading$: Subject<boolean> = this.loaderService.isLoading$;

  constructor(private loaderService: LoaderService) { }
}
