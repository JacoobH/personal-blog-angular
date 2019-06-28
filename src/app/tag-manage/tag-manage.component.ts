import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TagService} from '../tag.service';
import {Tag} from '../tag';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../article.service';
import {Article} from '../article';

@Component({
  selector: 'app-tag-manage',
  templateUrl: './tag-manage.component.html',
  styleUrls: ['./tag-manage.component.css']
})
export class TagManageComponent implements OnInit {
  aid = +this.route.snapshot.paramMap.get('id');
  article: Article;
  tags: Tag[];
  myTags: Tag[] = [];
  tagsText = '';
  constructor(public tagService: TagService,
              public articleService: ArticleService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.articleService.getArticle(this.aid).subscribe(article => this.article = article);
    this.refresh();
  }

  refresh(){
    this.tagsText = '';
    this.getTags();
    this.getMyTags();
  }

  getMyTags() {
    this.tagService.getTagsByAid(this.aid)
      .subscribe(myTags => this.myTags = myTags,
          err => console.log('错误'),
        () => this.backFill());
  }

  backFill() {
    for (let tag of this.myTags) {
      this.tagsText += tag.tag+ ',';
    }
  }

  getTags() {
    this.tagService.getTags()
      .subscribe(tags => this.tags = tags);
  }

  addTags() {
    const tagStrings = this.tagsText.split(',');
    let tags: Tag[] = [];
    for (let tagString of tagStrings) {
      console.log('tagString:'+tagString);

      tags.push(new Tag(null, tagString));
    }
    // console.log(this.tagsText.);
    if (this.tagsText.charAt(this.tagsText.length-1) === ','){
      tags.pop();
    }
    // console.log('tags.length'+tags.length);
    if (tags.length >0){
      this.tagService.addTags(this.aid, tags)
        .subscribe(() => this.router.navigateByUrl('manage'));
    }
  }

  extendTagsText(tag: Tag) {
    let exist = false;
    const tagStrings = this.tagsText.split(',');
    for (let tagString of tagStrings) {
        if (tag.tag === tagString){
          exist = true
        }
    }

    if (!exist){
      this.myTags.push(tag);
      this.tagsText += tag.tag+ ',';
    }
  }

  removeTag(tag: Tag) {
    // console.log(tag);
    this.myTags = this.myTags.filter(m => m !== tag);
    this.tagService.removeTag(tag).subscribe(() => this.refresh());
      // .subscribe(() => this.router.navigateByUrl(`tag/${this.aid}`));
  }



}
