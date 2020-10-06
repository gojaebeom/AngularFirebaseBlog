import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Board } from 'src/app/models/board.model';
import { BoardService } from 'src/app/services/board.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.css']
})
export class BoardEditComponent implements OnInit {

  public board : Board = {
    key : '',
    category:'',
    title : '',
    content : '',
    createdAt : new Date(),
    updatedAt : new Date()
  }

  constructor(
    private boardService : BoardService, 
    private route : ActivatedRoute, 
    private router : Router,
    private commonService :CommonService
    ) { 
    console.log('%c BoardEdit Is Started💥','background:linear-gradient(#00BFFF, #01DFA5);color:white;padding:5px 10px;');

  }

  ngOnInit(): void {

    this.board.category = this.route.snapshot.paramMap.get('boards');

    this.isLogin();

    this.getBoard();    
  }

  public isLogin():void{
    if(!this.commonService.isLogin){
      this.router.navigateByUrl('/');
      console.log('관리자용 기능입니다.');
    }
  }

  public getBoard():void{
    let id = this.route.snapshot.paramMap.get('id');
    this.board = this.boardService.getBoard(id);
  }

  public handleEvent(data): void{
    //console.log(data.event.path[0].body.innerHTML);
    this.board.content = data.event.path[0].body.innerHTML;
  }

  public edit() : void{
    console.log(this.board);
    this.boardService.edit(this.board);
    this.router.navigateByUrl(`/category/${this.board.category}`);
  }



}
