import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

 import { Observable, observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

import { Category } from '../models/category';
import { CategoryListResponseModel } from '../models/categorylistservice';



@Injectable({
  providedIn: 'root'
})

// enjekteedilebilir class
export class CategoryService {
  
  apiURL = "https://localhost:7191/api/Categories/getall"

  constructor(private httpClient:HttpClient) { }
  
  
  getCategories() :Observable<ListResponseModel<Category>>{
    // genericden gelen datayı productresponsemodela gore maple
    return this.httpClient.get<ListResponseModel<Category>>(this.apiURL);
  // response .data yı products a bağlayabilirsin.
  }
  
}