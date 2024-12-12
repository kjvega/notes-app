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

      // Error de conexión con el servidor
      if (error.status === 0) {
        alertService.showAlert('error', 'No se pudo conectar con el servidor. Por favor, intenta nuevamente más tarde.');
      }

      if (error.status == 500) {
        alertService.showAlert('error', 'Ocurrió un error al procesar la solicitud.');
      }

      if(error.status == 500 && error.error.error.causeMessage){
        alertService.showAlert('error',error.error.error.causeMessage);
      }


      if (error.status === 400) {
        alertService.showAlert('error', error.error.message);
      }

      if (error.status === 403) {
        authService.logout();
        alertService.showAlert('error','Sesión expirada o credenciales incorrectas');
      }

      if (error.status === 404) {
        alertService.showAlert('error',error.error.message );
      }

      if (error.status === 409) {
        alertService.showAlert('error',error.error.message );
      }
      return throwError(() => error);
    })
  );
};
