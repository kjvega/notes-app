import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alert } from '../../../models/alert/alert-models';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new BehaviorSubject<Alert | null>(null);
  private timeoutId: any;

  get alert$() {
    return this.alertSubject.asObservable();
  }

  showAlert(type: string, message: string) {
    this.alertSubject.next({ type, message });

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(() => {
      this.clearAlert();
    }, 5000);
  }

  clearAlert() {
    this.alertSubject.next(null);
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
