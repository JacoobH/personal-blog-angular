import { Component, OnInit } from '@angular/core';
import {Comment} from '../comment';
import {CommentService} from '../comment.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comment-manage',
  templateUrl: './comment-manage.component.html',
  styleUrls: ['./comment-manage.component.css']
})
export class CommentManageComponent implements OnInit {
  aid = +this.route.snapshot.paramMap.get('id');
  comments: Comment[];
  pageNo = 1;
  pageSize = 5;
  dotArr = Array;
  dotNum = 0;
  searchText: string;

  constructor(private commentService: CommentService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.getPageNumber(this.aid, this.pageSize, this.searchText);
    this.getComments(this.aid, this.pageNo, this.pageSize, this.searchText);
  }

  // 得到页数
  getPageNumber(aid: number, pageSize: number, searchText: string) {
    this.commentService.getPageNumber(aid,pageSize, searchText)
      .subscribe(dotNum => this.dotNum = dotNum);
    // console.log(this.dotNum);
  }
  getComments(aid: number, pageNo: number, pageSize: number, searchText: string): void {
    this.commentService.getCommentsWithArticleId(aid, pageNo, pageSize, searchText)
      .subscribe(comments => this.comments = comments);
  }

  // 翻页
  pageChanged(no: number) {
    this.pageNo = no;
    this.getComments(this.aid, this.pageNo, this.pageSize, this.searchText);
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

  // 删除该评论
  removeComment (comment: Comment) {
    this.commentService.removeComment(comment)
      .subscribe(comments => comment);
    this.comments = this.comments.filter(c => c !== comment);
  }

  goBack(): void {
    this.location.back();
  }

}
