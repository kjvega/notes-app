import { Injectable } from '@angular/core';
import { mainUrl } from '../../../envairoments/envairoment';
import { genericResponseAuth, jwt, User } from '../../../models/auth/auth-model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = mainUrl + 'api/auth/';

  private readonly TOKEN_KEY = 'JWT';


  constructor(private http: HttpClient, private router: Router) { }

  login(user: User) {
    return this.http.post<genericResponseAuth<jwt>>(this.authUrl + 'login', user).subscribe({
      next: (response) => {
        this.setToken(response.body.token);
        this.router.navigate(['/dashboard']);

      }
    });
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/auth']);
  }

  saveUser(user: User):Observable<genericResponseAuth<{}>> {
    return this.http.post<genericResponseAuth<{}>>(this.authUrl + 'register', user);

  }

}
