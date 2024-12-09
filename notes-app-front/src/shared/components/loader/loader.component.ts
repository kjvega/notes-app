import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderService } from '../../../core/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  isLoading;

  constructor(private loaderService: LoaderService) {
    this.isLoading = this.loaderService.loader$;
   
  }
}
