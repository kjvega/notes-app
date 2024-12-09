import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from "../shared/components/alert/alert.component";
import { LoaderComponent } from "../shared/components/loader/loader.component";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { loaderInterceptor } from '../core/interceptors/loader-interceptor/loader.interceptor';
import { errorInterceptor } from '../core/interceptors/error-interceptor/error.interceptor';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertComponent, LoaderComponent],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useValue: loaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useValue: errorInterceptor,
      multi: true,
    },


  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'notes-app';
}
