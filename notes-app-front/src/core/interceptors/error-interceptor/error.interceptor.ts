import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AlertService } from '../../services/alert/alert.service';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const alertService = inject(AlertService);
  
  return next(req).pipe(
    catchError((error) => {
      if (error.status == 500 ) {
        alertService.showAlert('error', 'Ocurrió un error al procesar la solicitud.');
      }
      return throwError(() => error); 
    })
  );
};
