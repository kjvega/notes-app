import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { AuthComponent } from '../modules/auth/components/auth/auth.component';

export const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  //auth-routes
  { path: 'auth', component: AuthComponent },
  //page-not-fund
  { path: '**', component: PageNotFoundComponent }
];
