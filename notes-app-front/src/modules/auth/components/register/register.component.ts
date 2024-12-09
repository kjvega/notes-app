import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../../../shared/custom-validators/custom-validators';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm:FormGroup = new FormGroup({});


  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.registerForm = new FormGroup({
      userName: new FormControl('',[Validators.required, Validators.maxLength(10)]),
      password: new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(8)]),
      confirmPassword:new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(8)]),
    },
    { validators: passwordMatchValidator });
    
  }

  saveRegister(){
    if(this.registerForm.invalid){
      this.registerForm.markAsTouched();
      return
    }

    // consume el endpoint de registro 
  }


}
