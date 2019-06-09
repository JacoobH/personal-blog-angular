import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogCardComponent} from './blog-card/blog-card.component';
import {TimeLineComponent} from './time-line/time-line.component';
import {ArticleListComponent} from './article-list/article-list.component';

const routes: Routes = [
  {path: 'blogCard', component: BlogCardComponent},
  {path: 'timeLine', component: TimeLineComponent},
  {path: 'articleList', component: ArticleListComponent},
  { path: '', redirectTo: '/blogCard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
