import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Board } from 'src/app/models/board.model';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {

  public pageId:string;

  public board:Board = {
    key:'',
    category:'',
    title:'',
    content:'',
  }

  constructor(
    private boardService : BoardService, 
    private route : ActivatedRoute
    ) { 
    console.log('%c BoardDetail Is Started💥','background:linear-gradient(#00BFFF, #01DFA5);color:white;padding:5px 10px;');
  }

  ngOnInit(): void {
    
    this.getBoard();
  }

  public getBoard():void{

    //URL에서 id 파라미터의 값을 추출해 pageId에 할당한다.
    this.pageId = this.route.snapshot.paramMap.get('id');
    console.log(this.pageId);

    //board.key 와 url.param의 id 값이 같은 board를 가져온다. 
    this.board = this.boardService.getBoard(this.pageId);
  }

}
