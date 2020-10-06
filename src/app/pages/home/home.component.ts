import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public category : Category = {
    img:'',
    title:'',
    path:''
  }
  public categories : Category[] = [];

  public isLogin : boolean;

  constructor(private categoryService : CategoryService ,private commonService : CommonService) { 
    console.log('%c Home is Started💥','background:linear-gradient(#00BFFF, #01DFA5);color:white;padding:5px 10px;');

    
  }

  ngOnInit(): void {
    this.isLogin = this.commonService.isLogin;

    this.getCategories();
  }

  public getCategories():void{
    this.categoryService.getCategories().then(()=>this.categories = this.categoryService.categories);
  }

  public modalToggle(modal, key?):void{
    modal.classList.toggle('is-active');

    if(key){
      this.category = this.categoryService.getCategory(key);
      return;
    }
    else
      this.category = 
      {
        img:'',
        title:'',
        path:''
      };
    return;
  } 

  public add(modal):void{
    this.categoryService.add(this.category);
    modal.classList.toggle('is-active');
  }

  public edit(modal):void{
    this.categoryService.edit(this.category);
    modal.classList.toggle('is-active');
  }

  public destroy(category):void{
    this.categoryService.destroy(category);
  }

}
