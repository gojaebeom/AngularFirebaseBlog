import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog-clone';

  constructor(private commonService : CommonService){
    console.log('%c App is Started💥','background:linear-gradient(#00BFFF, #01DFA5);color:white;padding:5px 10px;');

    firebase.initializeApp(environment.firebase);
    this.commonService.fireAuth = firebase.auth();
    this.commonService.fireData = firebase.database();

    this.commonService.fireAuth.onAuthStateChanged((user) => {

      if(user){
        this.commonService.isLogin = true;
      }else{
        this.commonService.isLogin = false;
      }
      console.log(this.commonService.isLogin);
    });
  }
}
