import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Article} from '../article';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  articles: Article[];
  pageNo = 1;
  pageSize = 5;
  dotArr = Array;
  dotNum = 0;
  searchText: string;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.refresh();
  }

  // 删除该篇文章
  removeArticle (article: Article) {
    this.articleService.removeArticle(article)
      .subscribe(articles => article);
    this.articles = this.articles.filter(a => a !== article);
  }

  // 得到页数
  getPageNumber(pageSize: number, searchText: string) {
    this.articleService.getPageNumber(pageSize, searchText)
      .subscribe(dotNum => this.dotNum = dotNum);
    console.log(this.dotNum);
  }

  // 翻页
  pageChanged(no: number) {
    this.pageNo = no;
    this.getArticles(this.pageNo, this.pageSize, this.searchText);
  }

  // 修改页大小
  pageSizeChanged(size: number) {
    this.pageSize = size;
    this.refresh();
  }

  // 搜索值变化
  searchTextChanged(search: string) {
    if (search) {
      this.searchText = search;
    } else {
      this.searchText = null;
    }
    this.refresh();
  }

  getArticles(pageNo: number, pageSize: number, searchText: string): void {
    this.articleService.getArticlesWithSearchText(pageNo, pageSize, searchText)
      .subscribe(articles => this.articles = articles);
  }

  refresh() {
    this.getPageNumber(this.pageSize, this.searchText);
    this.getArticles(this.pageNo, this.pageSize, this.searchText);
  }

}
