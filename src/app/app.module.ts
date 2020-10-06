import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BoardListComponent } from './pages/board-list/board-list.component';
import { BoardDetailComponent } from './pages/board-detail/board-detail.component';
import { BoardEditComponent } from './pages/board-edit/board-edit.component';
import { BoardCreateComponent } from './pages/board-create/board-create.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import { SanitizeHtmlPipe} from './pipes/sanitize-html-pipe.pipe';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignRePasswordComponent } from './pages/sign-re-password/sign-re-password.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DisqusModule } from "ngx-disqus";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardListComponent,
    BoardDetailComponent,
    BoardEditComponent,
    BoardCreateComponent,
    SanitizeHtmlPipe,
    SignInComponent,
    SignUpComponent,
    SignRePasswordComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    FormsModule,
    DisqusModule.forRoot('gojaebeom-github-io')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
