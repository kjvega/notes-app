import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../../../../services/notes/notes.service';
import { Note, NoteSave } from '../../../../models/note/note-model';

@Component({
  selector: 'app-note-modal',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './note-modal.component.html',
  styleUrl: './note-modal.component.scss'
})
export class NoteModalComponent {
  private noteService = inject(NotesService);
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

    if(this.modalForm.invalid){
      this.modalForm.markAllAsTouched();
      return
    }
    const note:NoteSave = {
      title:this.modalForm.get('title')?.value,
      description:this.modalForm.get('description')?.value,
      version:0,
    }

    this.noteService.saveNote(note).subscribe({
      next:()=>{
        this.dialogRef.close(true);
      }
    })

  }

  closeModal(): void {
    this.dialogRef.close(false);
  }

}
