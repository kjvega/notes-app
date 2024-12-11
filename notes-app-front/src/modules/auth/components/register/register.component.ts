import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../../../shared/custom-validators/custom-validators';
import { User } from '../../../../models/auth/auth-model';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { AlertService } from '../../../../core/services/alert/alert.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm:FormGroup = new FormGroup({});
  private authService = inject(AuthService);
  private alertService = inject(AlertService);


  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.registerForm = new FormGroup({
      userName: new FormControl('',[Validators.required, Validators.maxLength(10)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      role: new FormControl('',[Validators.required, Validators.maxLength(30)]),
      password: new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(8)]),
      confirmPassword:new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(8)]),
    },
    { validators: passwordMatchValidator });
    
  }

  saveUser(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return
    }

    const user:User = {
      name:this.registerForm.get('userName')?.value,
      email:this.registerForm.get('email')?.value,
      password:this.registerForm.get('password')?.value,
      role:this.registerForm.get('role')?.value
    }

    this.authService.saveUser(user).subscribe({
      next:()=>{
        this.alertService.showAlert('success', 'Usuario creado Satisfactoriamente');
      }
    })

  }
}
