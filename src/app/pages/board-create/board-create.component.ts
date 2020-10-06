import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Board } from 'src/app/models/board.model';
import { BoardService } from 'src/app/services/board.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-board-create',
  templateUrl: './board-create.component.html',
  styleUrls: ['./board-create.component.css']
})
export class BoardCreateComponent implements OnInit {

  public board: Board;

  constructor(
    private boardService : BoardService,
    private route:ActivatedRoute, 
    private router : Router,
    private commonService : CommonService
    ) { 
    console.log('%c BoardCreate Is Started💥','background:linear-gradient(#00BFFF, #01DFA5);color:white;padding:5px 10px;');

    if(!this.commonService.isLogin){
      this.router.navigateByUrl('/');
      console.log('관리자용 기능입니다.');
    }
      

    let category = this.route.snapshot.paramMap.get('boards');

    this.board = {
      key : '',
      category : category,
      title : '',
      content : '',
      createdAt : new Date(),
      updatedAt : new Date()
    }
  }

  ngOnInit(): void {
  }

  public handleEvent(data): void{
    //console.log(data.event.path[0].body.innerHTML);
    
    this.board.content = data.event.path[0].body.innerHTML;
  }

  public add() : void{
    console.log(this.board);
    this.boardService.add(this.board);

    this.router.navigateByUrl(`/category/${this.board.category}`);
  }

  

}
