import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CommentService} from '../comment.service';
import {Article} from '../article';
import {Comment} from '../comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnChanges {
  @Input() article: Article;

  commentText: string;

  comments: Comment[];
  pageNo = 1;
  pageSize = 20;


  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.getComments(this.pageNo, this.pageSize, this.article);
  }

  getComments(pageNo: number, pageSize: number, article: Article): void {
    this.commentService.getCommentsWithArticleId(pageNo, pageSize, article.id)
      .subscribe(comments => this.comments = comments);
  }


  addComment(article: Article, commentText: string) {
    // console.log(article + ',' + commentText + ',' + this.dateFormat(new Date()));
    const comment: Comment = new Comment(article, commentText, this.dateFormat(new Date()));
    this.commentService.addComment(comment)
      .subscribe(() => this.getComments(this.pageNo, this.pageSize, this.article));
    // 怎么保证后执行
    // this.getComments(this.pageNo, this.pageSize, this.article);
  }

  dateFormat(date: Date): string {
    const y =  date.getFullYear();
    const m =  date.getUTCMonth() + 1;
    const d =  date.getDate();
    return y + '-' + ('0' + (m)).slice(-2) + '-' + ('0' + d).slice(-2);
  }
}
