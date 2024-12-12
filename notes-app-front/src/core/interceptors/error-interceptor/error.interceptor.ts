import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AlertService } from '../../services/alert/alert.service';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';


export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const alertService = inject(AlertService);

  const authService = inject(AuthService);

  return next(req).pipe(
    catchError((error) => {

      const handleError = (message: string) => {
        alertService.showAlert('error', message);
      };

      const { status, error: errBody } = error;

      switch (status) {
        case 0: 
          handleError('No se pudo conectar con el servidor. Por favor, intenta nuevamente más tarde.');
          break;

        case 400:
        case 404:
        case 409:
          handleError(errBody?.message || 'Ocurrió un error desconocido.');
          break;

        case 403:
          authService.logout();
          handleError('Sesión expirada o credenciales incorrectas.');
          break;

        case 500:
          const causeMessage = errBody?.error?.causeMessage;
          handleError(causeMessage || 'Ocurrió un error al procesar la solicitud.');
          break;

        default:
          handleError('Se produjo un error inesperado.');
          break;
      }

      return throwError(() => error);
    })
  );
}
