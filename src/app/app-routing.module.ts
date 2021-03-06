import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogCardComponent} from './blog-card/blog-card.component';
import {TimeLineComponent} from './time-line/time-line.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {SignFormComponent} from './sign-form/sign-form.component';
import {ManageComponent} from './manage/manage.component';
import {MainPageComponent} from './main-page/main-page.component';
import {EditBlogComponent} from './edit-blog/edit-blog.component';
import {TagManageComponent} from './tag-manage/tag-manage.component';
import {CommentManageComponent} from './comment-manage/comment-manage.component';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  {path: 'mainPage', component: MainPageComponent},
  {path: 'settings/:username', component: SettingsComponent},
  {path: 'editBlog/:id', component: EditBlogComponent},
  {path: 'tag/:id', component: TagManageComponent},
  {path: 'commentManage/:id', component: CommentManageComponent},
  {path: 'blogCard', component: BlogCardComponent},
  {path: 'manage', component: ManageComponent},
  {path: 'signForm', component: SignFormComponent},
  {path: 'timeLine', component: TimeLineComponent},
  {path: 'articleList', component: ArticleListComponent},
  { path: 'detail/:id', component: ArticleDetailComponent },
  { path: '', redirectTo: '/mainPage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
