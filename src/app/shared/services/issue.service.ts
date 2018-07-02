import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Issue} from '../model/issue.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  findIssuesByCriterion(criterion: string, value: string): Observable<Issue[]> {
    const url = environment.apiEndpoint + '/issue/search/' + criterion + '/' + value;
    const headers =  new HttpHeaders({
      'Authorization': localStorage.getItem('token')
    });
    return this.http.get<Issue[]>(url, {headers: headers});
  }
}
