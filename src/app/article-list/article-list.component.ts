import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../article';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {EventService} from '../event.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  searchText: string;

  articles: Article[];
  pageNo = 1;
  pageSize = 4;

  // Array type captured in a variable
  dotArr = Array;
  dotNum = 0;

  constructor(
    private articleService: ArticleService,
    private event: EventService) { }
  ngOnInit() {
    this.searchText = this.event.getMessage();
    this.refresh();
  }

  // 得到页数
  getPageNumber(pageSize: number) {
    this.articleService.getPageNumber(pageSize)
      .subscribe(dotNum => this.dotNum = dotNum - 1);
  }
  // 翻页
  pageChanged(no: number) {
    this.pageNo = no;
    this.getArticles(this.pageNo, this.pageSize, this.searchText);
  }

  refresh() {
    this.getPageNumber(this.pageSize);
    this.getArticles(this.pageNo, this.pageSize, this.searchText);
  }

  getArticles(pageNo: number, pageSize: number, searchText: string): void {
    this.articleService.getArticlesWithSearchText(pageNo, pageSize, searchText)
      .subscribe(articles => this.articles = articles);
  }


}
