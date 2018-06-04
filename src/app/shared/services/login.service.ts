import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';
import {Token} from '../model/token/token.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  loggedIn = false;
  log: Observable<boolean>;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void { }

  loginUser(username: string, password: string) {
    const url = environment.apiEndpoint + '/oauth/token';
    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;
    const headers =  new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(environment.tokenAuthUsername + ':' + environment.tokenAuthPassword)
    });

    this.http.post(url, body, {headers: headers}).subscribe((data: Token) => {
      localStorage.setItem('token', 'Bearer ' + data.access_token);
      this.loggedIn = true;
      this.router.navigate(['dashboard']);
    }, error => {
      this.loggedIn = false;
      alert('Wrong username or password');
    });
  }

  logoutUser() {
    this.loggedIn = false;
    localStorage.removeItem('token');
  }

}
