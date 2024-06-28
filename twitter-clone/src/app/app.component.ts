import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';

import { UserService } from './services/user.service';
import { PostsService } from './services/posts.service';
import { CommentsService } from './services/comments.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    PostsService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export { AppComponent };

