import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../article';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  @Input() article: Article;
  id = +this.route.snapshot.paramMap.get('id');
  // title: string;
  // content: string;
  // visit: number;
  // time: string;
  constructor(public articleService: ArticleService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    if (this.id !== -1) {
      this.articleService.getArticle(this.id)
        .subscribe(article => this.article = article);
    } else {
      this.article = new Article(null, '', this.dateFormat(new Date()), 0, '');
    }
  }

  submit () {
    if (this.article.title != null && this.article.title !== ''
    && this.article.content != null && this.article.content !== '') {
      if (this.article.time === null) {
        this.article.time = this.dateFormat(new Date());
      }
      if (this.article.visit === null) {
        this.article.visit = 0;
      }
      const article: Article =
        new Article(this.article.id, this.article.title, this.article.time, this.article.visit, this.article.content);
      if (this.id !== -1) {
        this.articleService.modifyArticle(article)
          .subscribe(() => this.router.navigateByUrl('manage'));
      } else {
        this.articleService.addArticle(article)
          .subscribe(() => this.router.navigateByUrl('manage'));
      }
      // this.router.navigateByUrl('manage');
    } else {
      alert('标题和内容不能为空');
    }
  }
  dateFormat(date: Date): string {
    const y =  date.getFullYear();
    const m =  date.getUTCMonth() + 1;
    const d =  date.getDate();
    return y + '-' + ('0' + (m)).slice(-2) + '-' + ('0' + d).slice(-2);
  }

}
