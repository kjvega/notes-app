import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const formGroup = control; 
  
  const passwordControl = formGroup.get('password');
  const confirmPasswordControl = formGroup.get('confirmPassword');
  
  if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
    confirmPasswordControl.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  } else {
    confirmPasswordControl?.setErrors(null);
    return null;
  }
}
