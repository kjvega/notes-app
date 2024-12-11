import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-note-modal',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './note-modal.component.html',
  styleUrl: './note-modal.component.scss'
})
export class NoteModalComponent {
  modalForm:FormGroup = new FormGroup({});
  constructor(public dialogRef: MatDialogRef<NoteModalComponent>) {}

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

  closeModal(): void {
    this.dialogRef.close(false);
  }

}
