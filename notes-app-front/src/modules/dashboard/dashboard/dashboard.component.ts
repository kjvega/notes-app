import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NoteModalComponent } from '../modal/note-modal/note-modal.component';
import { NotesService } from '../../../services/notes/notes.service';
import { Note } from '../../../models/note/note-model';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../../core/services/alert/alert.service';
import { log } from 'console';
import { ConfirmationAlertComponent } from '../../../shared/components/confirmation-alert/confirmation-alert.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatDialogModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  private authService = inject(AuthService);
  private noteService = inject(NotesService);
  notes!:Note[];

  readonly dialog = inject(MatDialog);
  private alertService = inject(AlertService);

  
  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes(){
    this.noteService.getAllNotes().subscribe({
      next:(responce)=>{
       this.notes = responce;

      }
    })
  }



  saveNote() {
    const dialogRef = this.dialog.open(NoteModalComponent, {
      width: '600px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.alertService.showAlert('success', 'Acción Satisfactoria');
        this.getAllNotes();
      }
    });
  }


  editNote(note:Note) {
    const dialogRef = this.dialog.open(NoteModalComponent, {
      width: '600px',
      height: '400px',
      data: { note }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.alertService.showAlert('success', 'Acción Satisfactoria');
        this.getAllNotes();
      }
    });
  }

  deleteNote(noteId:number){

    const dialogRef = this.dialog.open(ConfirmationAlertComponent, {
      width: '600px',
      height: '200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.noteService.deleteNote(noteId).subscribe({
          next:()=>{
            this.alertService.showAlert('success', 'Nota eliminada Satisfactoriamente');
            this.getAllNotes();
          }
        })
      }
    });
 


  }

  logout() {
    this.authService.logout();
  }

}
