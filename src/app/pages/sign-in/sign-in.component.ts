import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public user : User;

  constructor(private authService:AuthService) { 
    this.user = {
      email:'',
      password:''
    }
  }

  ngOnInit(): void {
  }

  public signIn():void{
    const result = this.authService.signIn(this.user.email, this.user.password);
    console.log(result);
  }

}
