import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  static boardList : string = "/boardList";
  static categoryList : string = "/categoryList";
  static account : string = "/board";
  

  public fireAuth: any;
  public fireData: any;

  public isLogin: boolean;

  constructor() { 
    console.log('%c CommonService is Started💥','background:linear-gradient(#00BFFF, #01DFA5);color:white;padding:5px 10px;');
  }
}
