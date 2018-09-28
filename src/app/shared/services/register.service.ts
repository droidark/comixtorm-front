import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../model/user.model';
import {Router} from '@angular/router';
import {errorObject} from 'rxjs/internal-compatibility';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  newUser(newUser: User): Observable<any> {
    const url = environment.apiEndpoint + '/user/register';
    return this.http.post(url, newUser);
  }
}
