import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tag} from './tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private tagsUrl = 'http://localhost:8080/tag';
  constructor(private http: HttpClient) { }

  addTags(aid: number, tags: Tag[]): Observable<Tag> {
    const url = `${this.tagsUrl}/addTags?aid=${aid}`;
    return this.http.post<Tag>(url, tags);
  }

  getTagsByAid(aid: number): Observable<Tag[]> {
    const url = `${this.tagsUrl}/getListByArticle?aid=${aid}`;
    return this.http.get<Tag[]>(url);
  }

  getTags(): Observable<Tag[]> {
    const url = `${this.tagsUrl}/getListByAll`;
    return this.http.get<Tag[]>(url);
  }

  removeTag(tag: Tag): Observable<{}> {
    const url = `${this.tagsUrl}/remove`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(url,tag,httpOptions);
  }
}
