import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alert } from '../../../models/alert/alert-models';
import { AlertService } from '../../../core/services/alert/alert.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnInit,OnDestroy {
  alert:Alert | null = null;
  private subscription!: Subscription;
  fadeOut = false;
  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.subscription = this.alertService.alert$.subscribe((alert) => {
      this.alert = alert;
      this.fadeOut = false;

      if (alert) {
        setTimeout(() => {
          this.fadeOut = true;
        }, 4500);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
