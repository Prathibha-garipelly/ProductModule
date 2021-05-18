import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../complaint.service';
import { Complaint } from '../models/complaint';
import { Product } from '../models/product';
@Component({
  selector: 'app-get-product-complaints',
  templateUrl: './get-product-complaints.component.html',
  styleUrls: ['./get-product-complaints.component.css']
})
export class GetProductComplaintsComponent implements OnInit {

  productCategoryName :string;
  complaint : Complaint;
  product : Product;
  constructor(private productService : ProductService,private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.productCategoryName=this.route.snapshot.params['productCatgeoryName'];
    this.productService.getProductComplaints(this.productCategoryName).subscribe(
      selectedComplaint =>{
        console.log(selectedComplaint);
        this.complaint=selectedComplaint;
      },error =>console.log(error)
    );
  }

}
