import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

import {LoaderService} from '../services/loader/loader.service';

@Injectable()

export class LoaderInterceptor implements HttpInterceptor {

  constructor(public loaderService: LoaderService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.startSpinner();

    return next.handle(request).pipe(
      finalize(() => this.loaderService.stopSpinner())
    );
  }
}
