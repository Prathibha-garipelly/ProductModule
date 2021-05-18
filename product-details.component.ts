import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productCategoryName : string;
  product :Product;
  constructor(private route : ActivatedRoute,private router :router,private productService :ProductService) { }

  ngOnInit(): void {
    this.product=new Product();
    this.productCategoryName=this.route.snapshot.params['productCategoryName'];
    this.productService.getProduct(this.productCategoryName).subscribe(
      selectedProduct =>{
        console.log(selectedProduct);
        this.product=selectedProduct;

      },error=>console.log(error)
    );

  }

}
