import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterLink,
     RouterLinkActive,
     CommonModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit{
  authForm:FormGroup = new FormGroup({});


  ngOnInit() {
    this.initForm();

  }

  initForm(){
    this.authForm = new FormGroup({
      userName: new FormControl('',[Validators.required, Validators.maxLength(10)]),
      password: new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(8)]),
    });
    
  }


}
