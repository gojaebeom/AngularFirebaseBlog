import { Injectable } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private commonService : CommonService) { 
  }

  public signIn(email:string, password:string):any{
    return this.commonService.fireAuth.signInWithEmailAndPassword(email, password);
  }

  public signOut(): any {
    return this.commonService.fireAuth.signOut();
  }
}
