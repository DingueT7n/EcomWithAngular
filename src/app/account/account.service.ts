import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, of, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/Models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  _baseURL = environment.baseURl;
  private currentUser = new ReplaySubject<IUser>(1);
  currentUser$ = this.currentUser.asObservable();

  constructor(private http: HttpClient, private router: Router) { }


  loadCurrentUser(token:string){
    if(token === null){
      this.currentUser.next(null);
      return of(null);
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization',`Bearer ${token}`);

    return this.http.get(this._baseURL+'Accounts/Get-Current-User',{headers}).pipe(
      map((user:IUser)=>{
        if(user){
          localStorage.setItem('token',user.token);
          this.currentUser.next(user);
        }
      })
    )
  }

  login(value: any) {
    return this.http.post(this._baseURL + 'Accounts/Login', value).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUser.next(user);
        }
      })
    )
  }


  register(value: any) {
      return this.http.post(this._baseURL + 'Accounts/Register', value).pipe(
        map((user: IUser) => {
          if (user) {
            localStorage.setItem('token', user.token);
            this.currentUser.next(user);
          }
        })
      )
    }


  logout() {
    localStorage.removeItem('token');
    this.currentUser.next(null);
    this.router.navigateByUrl('/');
  }


  checkEmailExist(email: string) {
    return this.http.get(this._baseURL + 'Accounts/Check-Email-Exist?email=' + email);
  }


}
