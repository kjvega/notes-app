import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from '../core/interceptors/error-interceptor/error.interceptor';
import { loaderInterceptor } from '../core/interceptors/loader-interceptor/loader.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),CommonModule,provideAnimations(), provideHttpClient(withFetch(), withInterceptors([errorInterceptor,loaderInterceptor])
   )]
};
