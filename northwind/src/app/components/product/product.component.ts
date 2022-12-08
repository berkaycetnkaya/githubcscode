import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

import { ProductService } from 'src/app/services/product.service';



// axios. fetch javascript e bunlar ıle yapabılırsın.
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

// product1 ={productId:1, productName:"Bardak",categoryId:1,unitPrice:5,unitsInstock:5}
// product2 ={productId:2, productName:"Laptop",categoryId:2,unitPrice:5,unitsInstock:3}
// product3 ={productId:3, productName:"Mouse",categoryId:3,unitPrice:5,unitsInstock:4}
// product4 ={productId:4, productName:"Keyboard",categoryId:4,unitPrice:5,unitsInstock:5}
// product5 ={productId:5, productName:"Camera",categoryId:5,unitPrice:5,unitsInstock:2}
// gerçek datalara geçişş*****

products:Product[] =[
  // this.product1,
  // this.product2,
  // this.product3,
  // this.product4,
  // this.product5,
  // gerçek datalara geçişş*****



  
];
dataLoad=false;

//apiURL = "https://localhost:7191/api/Products/getall"
// productResponseModel: ProductResponseModel={
//   data : this.products,
//   message:"",
//   success:true

// };
// webapıden gelen datayı karsılama
// 49. satırdan dolayu bunlara gerek kalmadı
  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    // genericden gelen datayı productresponsemodela gore maple
// this.httpClient.get<ProductResponseModel>(this.apiURL).subscribe((response)=>{
//   this.products= response.data
  
  // response .data yı products a bağlayabilirsin.
this.productService.getProducts().subscribe(response=>{
this.products=response.data
this.dataLoad= true;
})

}
  }


