import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()

export class LoaderService {
  isLoading$ = new Subject<boolean>();

  startSpinner() {
    this.isLoading$.next(true);
  }

  stopSpinner() {
    this.isLoading$.next(false);
  }
}
