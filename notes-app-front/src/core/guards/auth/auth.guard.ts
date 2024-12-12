import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { AlertService } from '../../services/alert/alert.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); 
  const token = authService.getToken();
  const router = inject(Router);
  const alertService = inject(AlertService);

  if (token) {
    return true;
  }

  router.navigate(['/auth']);
  alertService.showAlert('error', 'Sesión expirada o credenciales incorrectas.');
  return false;
};