import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { ArticleListComponent } from './article-list/article-list.component';

import { HttpClientModule } from '@angular/common/http';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import {EventService} from './event.service';
import { CommentComponent } from './comment/comment.component';
import { PlaceOnFileComponent } from './place-on-file/place-on-file.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import { ManageComponent } from './manage/manage.component';
import { MainPageComponent } from './main-page/main-page.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    BlogCardComponent,
    TimeLineComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    CommentComponent,
    PlaceOnFileComponent,
    SignFormComponent,
    ManageComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
