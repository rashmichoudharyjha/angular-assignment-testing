import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { DemoMaterialModule } from "./material-module";
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";
import { PostsComponent } from "./users/posts/posts.component";
import { CommentsComponent } from "./users/comments/comments.component";
import { HttpErrorInterceptor } from "./http-error.interceptor";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    ErrorPageComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class AppModule { }
