import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

 import { Observable, observable } from 'rxjs';
 import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';




@Injectable({
  providedIn: 'root'
})

// enjekteedilebilir class
export class ProductService {
  
  apiURL = "https://localhost:7191/api/Products/getall"

  constructor(private httpClient:HttpClient) { }
  
  
  getProducts() :Observable<ListResponseModel<Product>>{
    // genericden gelen datayı productresponsemodela gore maple
    return this.httpClient.get<ListResponseModel<Product>>(this.apiURL);
  // response .data yı products a bağlayabilirsin.
  }
  add(product:Product){
    return this.httpClient.post(this.apiURL+"products/add",product)
  }
}