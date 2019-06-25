import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from './article';
import {Comment} from './comment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articlesUrl = 'http://localhost:8080/article';
  constructor(private http: HttpClient) { }

  getArticle (id: number): Observable<Article> {
    const url = `${this.articlesUrl}/getArticleById?id=${id}`;
    return this.http.get<Article>(url);
  }

  getArticlesWithSearchText (pageNo: number, pageSize: number, searchText: string): Observable<Article[]> {
    const options = searchText ?
      { params: new HttpParams().set('searchText', searchText) } : {};
    const url = `${this.articlesUrl}/getListByPage?pageNo=${pageNo}&pageSize=${pageSize}`;
    return this.http.get<Article[]>(url, options);
  }

  getPageNumber(pageSize: number, searchText: string) {
    const options = searchText ?
      { params: new HttpParams().set('searchText', searchText) } : {};
    const url = `${this.articlesUrl}/getPageNumber?pageSize=${pageSize}`;
    return this.http.get<number>(url, options);
  }

  removeArticle(article: Article): Observable<Comment> {
    const url = `${this.articlesUrl}/remove`;
    return this.http.post<Comment>(url, article);
  }
}
