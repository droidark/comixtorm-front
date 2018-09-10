import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {Title} from '../model/title.model';
import {Observable} from 'rxjs';
import {Publisher} from '../model/publisher.model';
import {RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  findTitlesByUsername(): Observable<Publisher[]> {
    const url = environment.apiEndpoint + '/user/titles';
    const headers =  new HttpHeaders({
      'Authorization': localStorage.getItem('token')
    });
    return this.http.get<Publisher[]>(url, {headers: headers});
  }

  saveIssueToCollection(publisher: Publisher): Observable<any> {
    const url = environment.apiEndpoint + '/user/add';
    const headers =  new HttpHeaders({
      'Authorization': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    });
    return this.http.post(url, publisher, {headers: headers});
  }

  deleteIssueToCollection(publisher: Publisher): Observable<any> {
    const url = environment.apiEndpoint + '/user/delete';
    return this.http.request('DELETE', url, {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }),
      body: publisher
    });
  }
}
