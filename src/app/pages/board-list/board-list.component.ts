import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Board } from 'src/app/models/board.model';
import { BoardService } from 'src/app/services/board.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  public boards : Board[] = [];
  public categoryUrl : string;

  public isLogin : boolean;

  constructor(
    private boardService : BoardService, 
    private route:ActivatedRoute,
    private commonService :CommonService
    ) {
    console.log('%c BoardList Is Started💥','background:linear-gradient(#00BFFF, #01DFA5);color:white;padding:5px 10px;');
    
  }

  ngOnInit(): void {

    this.isLogin = this.commonService.isLogin;
    this.categoryUrl = this.route.snapshot.paramMap.get('boards');

    this.getBoards();
  }

  public getBoards():void{
    this.boardService.getBoards().then(()=>this.boards = this.boardService.boards);
  }

  public destroy(board) : void{
    this.boardService.destroy(board);
  }

}
