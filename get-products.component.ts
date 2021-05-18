import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '';
import { Complaint } from '';
@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit {

  productCategoryName : string;
  products : Product[];
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.reloadProductData();
  }
  reloadProductData(){
    this.productService.getProduct('productCategoryName').subcribe(
      products =>{
        this.products =products;
      }
    );
  }
  productDetails(id : string){
    this.router.navigate(['modelNumber',id])
  }



}
