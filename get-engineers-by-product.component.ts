import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import { Engineer } from '../models/engineer';
@Component({
  selector: 'app-get-engineers-by-product',
  templateUrl: './get-engineers-by-product.component.html',
  styleUrls: ['./get-engineers-by-product.component.css']
})
export class GetEngineersByProductComponent implements OnInit {

  productCategoryName:string;
  product :Product;
  engineer :Engineer;
  constructor(private productService : ProductService,private router : Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.productCategoryName=this.route.snapshot.params['productCategoryName'];
    this.productService.getEngineersByProduct(this.productCategoryName).subscribe(
      selectedEngineer =>{
        console.log(selectedEngineer);
        this.engineer = selectedEngineer;
      },error => console.log(error)
    );
  }

}
