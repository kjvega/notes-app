import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AlertService } from '../../services/alert/alert.service';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { log } from 'console';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const alertService = inject(AlertService);

  const authService = inject(AuthService);

  return next(req).pipe(
    catchError((error) => {
      if (error.status == 500) {
        alertService.showAlert('error', 'Ocurrió un error al procesar la solicitud.');
      }

      if (error.status === 403) {
        authService.logout();
        alertService.showAlert('error', 'Sesión expirada o no autorizada');
      }

      if (error.status === 409) {
        alertService.showAlert('error',error.error.message );
      }
      return throwError(() => error);
    })
  );
};
