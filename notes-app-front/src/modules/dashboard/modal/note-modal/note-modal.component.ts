import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  constructor(public dialogRef: MatDialogRef<NoteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { note: Note }
  ) {}

  ngOnInit() {
    this.initForm();
    if(this.data){
      this.setValueData();
    }
  }

  initForm(){
    this.modalForm = new FormGroup({
      title: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),

    });
  }

  setValueData(){
    this.modalForm.patchValue({
      title:this.data.note.title,
      description:this.data.note.description
    })

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

    if(this.data){
      const noteId = this.data.note.id;
      note.version = this.data.note.version;
      this.noteService.editNote(noteId,note).subscribe({
        next:()=>{
          this.dialogRef.close(true);
        }
      })
      return
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
