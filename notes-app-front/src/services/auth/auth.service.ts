import { Injectable } from '@angular/core';
import { mainUrl } from '../../envairoments/envairoment';
import { HttpClient } from '@angular/common/http';
import { Crdencials, User } from '../../models/auth/auth-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = mainUrl +'auth';

  constructor(
    private http:HttpClient
  ) { }

  registerUser(user:User):Observable<User>{
   return this.http.post<User>(this.authUrl,user);
  }

  authenticatedUser(crdencials:Crdencials):Observable<any>{
    return this.http.post<any>(this.authUrl,crdencials);
   }

}
