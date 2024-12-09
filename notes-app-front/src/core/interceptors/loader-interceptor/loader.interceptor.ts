import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../../../core/services/loader/loader.service';
import { finalize } from 'rxjs';


let activeRequests = 0;

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {

  const loaderService = inject(LoaderService);

  activeRequests++;
  loaderService.showLoader();
  return next(req).pipe(
    finalize(() => {
      activeRequests--;
      if (activeRequests === 0) {
        loaderService.hideLoader();
      }

    })
  );
};
