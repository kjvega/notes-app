import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { User } from '../../../../models/auth/auth-model';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
     CommonModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit{
  authForm:FormGroup = new FormGroup({});
  private authService = inject(AuthService);

  ngOnInit() {
    this.initForm();

  }

  initForm(){
    this.authForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required, Validators.maxLength(15),Validators.minLength(8)]),
    });
    
  }

  login(){
    if(this.authForm.invalid){
      this.authForm.markAllAsTouched();
      return;
    }

    const user:User = {
      email:this.authForm.get('email')?.value,
      password:this.authForm.get('password')?.value,
    }
     this.authService.login(user);
  }


}
