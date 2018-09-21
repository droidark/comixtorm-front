import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Title} from '../model/title.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TitleService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void { }
  findTitleByVanityAndPublisher(publisherVanity: string, titleVanity: string): Observable<Title> {
    const url = environment.apiEndpoint + '/title/search/' + publisherVanity + '/' + titleVanity;
    const headers =  new HttpHeaders({
      'Authorization': localStorage.getItem('token')
    });
    return this.http.get<Title>(url, {headers: headers});
  }
}
