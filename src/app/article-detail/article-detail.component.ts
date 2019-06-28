import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../article';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../article.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  @Input()article: Article;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getArticle();
  }
  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(id)
      .subscribe(article => this.article = article);
  }
}
