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

  getCommentsWithArticleId (pageNo: number, pageSize: number, aid: number): Observable<Comment[]> {
    const url = `${this.commentsUrl}/getListByArticleAndPage?aid=${aid}&pageNo=${pageNo}&pageSize=${pageSize}`;
    return this.http.get<Comment[]>(url);
  }
}
