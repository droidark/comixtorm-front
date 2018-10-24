import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {Title} from '../model/title.model';
import {Observable} from 'rxjs';
import {Publisher} from '../model/publisher.model';
import {RequestOptions} from '@angular/http';
import {Issue} from '../model/issue.model';
import {Cover} from '../model/cover.model';

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

  private saveIssueToCollection(publisher: Publisher): Observable<any> {
    const url = environment.apiEndpoint + '/user/add';
    const headers =  new HttpHeaders({
      'Authorization': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    });
    return this.http.post(url, publisher, {headers: headers});
  }

  private deleteIssueToCollection(publisher: Publisher): Observable<any> {
    const url = environment.apiEndpoint + '/user/delete';
    return this.http.request('DELETE', url, {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }),
      body: publisher
    });
  }

  saveOrDeleteIssueToCollection(
    publisherId: number,
    titleId: number,
    issueId: number,
    coverId: number,
    collected: boolean): Observable<any> {
    const publisher: Publisher = new Publisher();
    const title: Title = new Title();
    const titles: Title[] = [];
    const issue: Issue = new Issue();
    const issues: Issue[] = [];
    const cover: Cover = new Cover();
    const covers: Cover[] = [];
    cover.id = coverId;
    covers.push(cover);
    issue.id = issueId;
    issue.covers = covers;
    issues.push(issue);
    title.id = titleId;
    title.issues = issues;
    titles.push(title);
    publisher.id = publisherId;
    publisher.titles = titles;
    if (collected) {
      return this.saveIssueToCollection(publisher);
    }
    return this.deleteIssueToCollection(publisher);
  }
}
