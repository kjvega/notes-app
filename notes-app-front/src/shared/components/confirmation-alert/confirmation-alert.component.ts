import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NoteModalComponent } from '../../../modules/dashboard/modal/note-modal/note-modal.component';

@Component({
  selector: 'app-confirmation-alert',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-alert.component.html',
  styleUrl: './confirmation-alert.component.scss'
})
export class ConfirmationAlertComponent {
  constructor(public dialogRef: MatDialogRef<NoteModalComponent>) { }

  closeDialog(dialog: boolean) {
    if (dialog) {
      this.dialogRef.close(true);
      return
    }
    this.dialogRef.close(false);

  }

}
