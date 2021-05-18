import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {ProductService} from './product.service';
import { AddProductComponent } from './add-product/add-product.component';
import { RemoveProductsComponent } from './remove-products/remove-products.component';
import { GetProductsComponent } from './get-products/get-products.component';
import { UpdateProductWarrantyComponent } from './update-product-warranty/update-product-warranty.component';
import { GetProductComplaintsComponent } from './get-product-complaints/get-product-complaints.component';
import { GetEngineersByProductComponent } from './get-engineers-by-product/get-engineers-by-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    RemoveProductsComponent,
    GetProductsComponent,
    UpdateProductWarrantyComponent,
    GetProductComplaintsComponent,
    GetEngineersByProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
