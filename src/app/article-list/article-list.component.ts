import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[];
  pageNo = 1;
  pageSize = 4;
  // Array type captured in a variable
  dotArr = Array;
  dotNum = 0;
  constructor(private articleService: ArticleService) { }
  ngOnInit() {
    this.getPageNumber(this.pageSize);
    this.getArticles(this.pageNo, this.pageSize);
  }
  getArticles(pageNo: number, pageSize: number): void {
    this.articleService.getArticles(pageNo, pageSize)
      .subscribe(articles => this.articles = articles);
  }
  getPageNumber(pageSize: number) {
    this.articleService.getPageNumber(pageSize)
      .subscribe(dotNum => this.dotNum = dotNum-1);
  }
  pageChanged(no: number) {
    this.pageNo = no;
    this.getArticles(this.pageNo, this.pageSize);
  }

}
