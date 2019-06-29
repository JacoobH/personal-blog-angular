import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from './article';
import {Comment} from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentsUrl = 'http://localhost:8080/comment';
  constructor(private http: HttpClient) { }

  addComment(comment: Comment): Observable<Comment> {
    const url = `${this.commentsUrl}/add`;
    return this.http.post<Comment>(url, comment);
  }

  removeComment(comment: Comment): Observable<Article> {
    const url = `${this.commentsUrl}/remove`;
    return this.http.post<Article>(url, comment);
  }

  getCommentsWithArticleId (aid: number, pageNo: number, pageSize: number,searchText: string): Observable<Comment[]> {
    const url = `${this.commentsUrl}/getListByArticleAndPage?aid=${aid}&pageNo=${pageNo}&pageSize=${pageSize}`;
    return this.http.get<Comment[]>(url);
  }

  //得到总页数
  getPageNumber(aid: number, pageSize: number, searchText: string) {
    const options = searchText ?
      { params: new HttpParams().set('searchText', searchText) } : {};
    const url = `${this.commentsUrl}/getPageNumber/${aid}/${pageSize}`;
    return this.http.get<number>(url, options);
  }
}
