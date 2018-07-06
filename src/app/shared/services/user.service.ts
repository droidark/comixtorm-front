import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {Title} from '../model/title.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  findTitlesByUsername(): Observable<Title[]> {
    const url = environment.apiEndpoint + '/user/titles';
    const headers =  new HttpHeaders({
      'Authorization': localStorage.getItem('token')
    });
    return this.http.get<Title[]>(url, {headers: headers});
  }

  saveIssueToCollection(title: Title): Observable<any> {
    const url = environment.apiEndpoint + '/user/add';
    const headers =  new HttpHeaders({
      'Authorization': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    });
    return this.http.post(url, title, {headers: headers});
  }
}
