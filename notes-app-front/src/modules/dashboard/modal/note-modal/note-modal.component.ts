import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-modal',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './note-modal.component.html',
  styleUrl: './note-modal.component.scss'
})
export class NoteModalComponent {
  modalForm:FormGroup = new FormGroup({});

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.modalForm = new FormGroup({
      title: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),

    }
   );
    
  }

  saveNote(){

  }

}
