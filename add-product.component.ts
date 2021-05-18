import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product : Product=new Product();
  submitted=false;
  constructor(private productService :ProductService,private router :Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
  }
  addProduct():void{
    this.productService.addProduct(this.product).subscribe(
      result=>{
        console.log(result);
      },
      error=>console.log(error)
    );
  }
  onSubmit(){
    this.submitted=true;
    this.addProduct();
  }


}
