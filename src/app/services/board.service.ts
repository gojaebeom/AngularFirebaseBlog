import { Injectable } from '@angular/core';

import {Board} from '../models/board.model';

import { environment } from 'src/environments/environment';
import * as firebase from'firebase';
import 'firebase/database';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  public boards : Board[] = [];

  constructor(private commonService : CommonService) {
    console.log('%c BoardService Is Started💥','background:linear-gradient(#00BFFF, #01DFA5);color:white;padding:5px 10px;');
  }

  public getBoards(){

    this.boards.length = 0;

    return new Promise((resolve)=>{

      let itemList = this.commonService.fireData.ref(CommonService.boardList);

      //데이터를 돌리면서 값 추출
      itemList.on('value', snapshot=>{

        snapshot.forEach(snap=>{
    
          this.boards.push({
            key : snap.key,
            category : snap.val().category,
            title : snap.val().title,
            content : snap.val().content,
            createdAt : new Date(),
            updatedAt : new Date()
          });

        })
      })
      resolve();
    })
  }

  public getBoard(key:string):Board{
    return this.boards.find(board => board.key == key);
  }
    

  public add(board:Board) : void {
    this.commonService.fireData.ref(CommonService.boardList).push(board);
    this.boards.length = 0;
  }

  public edit(board:Board) : void{
    this.commonService.fireData.ref(CommonService.boardList).child(board.key).update(board);
    this.boards.length = 0;
  }

  public destroy(board:Board) : void{
    this.commonService.fireData.ref(CommonService.boardList).child(board.key).remove();
    this.boards.length = 0;
  }
}
