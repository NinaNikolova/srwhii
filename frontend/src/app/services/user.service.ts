import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';

const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // the behaviour Subject has read and write mode inside it; but we don't want nobody from outside to write anything inside user service; so we just need to expose the user observable; in fact user subject is converted to observable
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;

  constructor(private http: HttpClient, private toastrService: ToastrService) {
    // so infact userObservable is read-only version of the userSubject; and that is what we want to expose outside of the user service;
    this.userObservable = this.userSubject.asObservable();
  }

  //  the main difference between interface and class is that we can't create a new instance from interface
  login(userLogin: IUserLogin): Observable<User> {
    // here we need to make http request to the server so we need to inject http client here in constructor
    // here we don't use subscribe to get value of the server because if use subscribe the return type will be subscription and not observable
    // in the cases wich we only want to tap the result without changing its value, without breaking the flow after observable you can pipe your observable with tap function wich is part of rxjs - used inside the pipe you can pass an object that is next member wich will handle the happy result and its error member wich will handle the unhappy result and give us the error response
    // and as you can see the result of the pipe is still an observable so it not break the flow of the observable
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to FreeComponents ${user.firstName}!`,
            'login Sucessful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed')
        }


      })
    )
  }
  logout() {
    this.userSubject.next(new User);
    localStorage.removeItem(USER_KEY);
    // to refresh the page
    window.location.reload();
  }
  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  }
  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) {
      return JSON.parse(userJson) as User;
    }
    return new User();
  }
};