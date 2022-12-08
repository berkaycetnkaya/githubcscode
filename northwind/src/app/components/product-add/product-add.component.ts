import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ProductService } from 'src/app/services/product.service';




@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
productAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private productService:ProductService ) { }

  ngOnInit(): void {
  }
  createProductAddForm(){
    this.productAddForm= this.formBuilder.group({
      productName:["",Validators.required],
    unitsPrice:["",Validators.required],
    unitsInStock:["",Validators.required],
    categoryId:["",Validators.required]
    })

  }

  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value)
      this.productService.add(productModel).subscribe(data=>{
        //this.toastrService.success("ürün eklendi")
      },responseError=>{console.log(responseError.console.error()
      )})

    } else{

    }
    
    
  }

}
