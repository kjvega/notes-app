import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { AuthComponent } from '../modules/auth/components/auth/auth.component';
import { RegisterComponent } from '../modules/auth/components/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  //auth-routes
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  //page-not-fund
  { path: '**', component: PageNotFoundComponent }
];
