import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NoteModalComponent } from '../modal/note-modal/note-modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private authService = inject(AuthService);

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(NoteModalComponent, {
      width: '600px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logout() {
    this.authService.logout();
  }

}
