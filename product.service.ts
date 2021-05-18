import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  baseURL='http://localhost:8089/product/';

  addProduct(product : Product) :Observable<any>{
    return this.http.post("http://localhost:8089/product/addProduct",product);
  }
  removeProducts(productCategoryName :string) :Observable<any>{
    return this.http.delete("http://localhost:8089/product/removeProducts",productCategoryName);
  }
  getProduct(productCategoryName:string):Observable<any>{
    return this.http.get("http://localhost:8089/product/getProduct"+productCategoryName);
  }
  updateProductWarranty(modelNumber:string,warrantyYears:number):Observable<any>{
    return this.http.put("http://localhost:8089/product/updateWarrantyYears",modedlNumber,warrantyYears);
  }
  getProductComplaints(productCategoryName:string):Observable<any>{
    return this.http.get("http://localhost:8089/product/complaint/productCatgeoryName/"+productCategoryName);
  }
  getEngineersByProduct(productCatgeoryName:string):Observable<any>{
    return this.http.get("http://localhost:8089/product/engineer/productCategoryName/"+productCategoryName);
  }

}
