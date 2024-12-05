import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
    { path: 'landing-page', component: LandingPageComponent },
  { path: '**', component: PageNotFoundComponent }
];
