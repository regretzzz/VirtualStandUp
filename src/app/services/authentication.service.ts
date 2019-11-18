import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserDTO } from '../shared/models/userDTO.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isLogin: boolean;
  private isAuthenticated: BehaviorSubject<boolean>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isLogin = false;
    this.isAuthenticated = new BehaviorSubject<boolean>(false);
  }
  getValue(): Observable<boolean> {
    this.isAuthenticated.next(this.IsAuthenticated());
    console.log(this.isAuthenticated.value);
    return this.isAuthenticated.asObservable();
  }
  setValue(newValue): void {
    this.isAuthenticated.next(newValue);
  }

  Login(username: string, password: string) {
    this.http
      .post<UserDTO>('http://localhost:8080/user/login/', {
        username,
        password
      })
      .subscribe(responseData => {
        console.log(responseData);
        if (responseData.userID != null) {
          this.isLogin = true;
          this.isAuthenticated.next(true);
          localStorage.setItem('userID', responseData.userID);
          localStorage.setItem('name', responseData.name);
          localStorage.setItem('email', responseData.email);
          localStorage.setItem(
            'teams',
            JSON.stringify(responseData.listofTeam)
          );
          this.router.navigate(['home'], { relativeTo: this.route });
        } else {
          console.log('failed login');
        }

        return this.isLogin;
      });
  }

  logout() {
    localStorage.clear();
    console.log('clear');
    this.isLogin = false;
    this.isAuthenticated.next(false);
    this.router.navigate(['login']);
  }

  IsAuthenticated() {
    let returnValue = false;
    console.log(localStorage.length);
    if (localStorage.length > 0) {
      returnValue = true;
    }
    return returnValue;
  }
}
