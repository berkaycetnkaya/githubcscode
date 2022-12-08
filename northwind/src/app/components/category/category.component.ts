import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[]=[];
  constructor(private categoryService:CategoryService) { }
// currentCategory:Category=(categoryId:0,categoryName:"");
  // ya newlersın  class olusturursun

ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
      
    this.categoryService.getCategories().subscribe(response=>{
   
    this.categories=response.data
    console.log(response.data)
    // this.categoryService.getCategories().subscribe(response => console.log(response))
    })
    
    }
    // setCurrentCategory(category:Category){
      //console.log(category.categoryName)
      // this.currentCategory= category;
   // }
// getCurrentCategoryClass(category:Category){
 // if(category==this.currentCategory){return "list-group-item active"}else{return "list-group-item"}
//}


}
