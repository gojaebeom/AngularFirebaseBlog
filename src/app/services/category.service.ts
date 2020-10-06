import { Injectable } from '@angular/core';

import { Category } from 'src/app/models/category.model';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public categories : Category[] = [];

  constructor(private commonService : CommonService) { 
    console.log('%c CategoryService is Started💥','background:linear-gradient(#00BFFF, #01DFA5);color:white;padding:5px 10px;');
  }

  public getCategories():any{
    console.log(this.categories);
    this.categories.length = 0;

    return new Promise((resolve)=>{

      let itemList = this.commonService.fireData.ref(CommonService.categoryList);

      itemList.on('value', snapshot=>{

        snapshot.forEach(snap=>{
          
          this.categories.push({
            key : snap.key,
            img : snap.val().img,
            title : snap.val().title,
            path : snap.val().path,
          });
        })

        resolve();
      })
    })
  }

  public getCategory(key:string){
    return this.categories.find(category => category.key == key);
  }

  public add(category:Category):void{
    this.commonService.fireData.ref(CommonService.categoryList).push(category);
    this.categories.length = 0;
    this.getCategories();
  }

  public edit(category:Category) : void{
    this.commonService.fireData.ref(CommonService.categoryList).child(category.key).update(category);
    this.categories.length = 0;
    this.getCategories();
  }

  public destroy(category:Category) : void{
    this.commonService.fireData.ref(CommonService.categoryList).child(category.key).remove();
    this.categories.length = 0;
    this.getCategories();
  }
}
