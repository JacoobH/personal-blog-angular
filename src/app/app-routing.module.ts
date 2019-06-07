import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogCardComponent} from './blog-card/blog-card.component';

const routes: Routes = [
  {path: 'blogCard', component: BlogCardComponent},
  { path: '', redirectTo: '/blogCard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
