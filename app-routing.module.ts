import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductComponent} from './add-product/add-product.component';
import {RemoveProductsComponent} from './remove-products/remove-products.component';
import {GetProducts} from './get-products/get-products.component';
import {UpdateProductWarranty} from './update-product-warranty/update-product-warranty.component';
import {GetEngineersByProduct} from './get-engineers-by-product/get-engineers-by-product.component';
import {GetProductComplaints} from './get-product-complaints/get-product-complaints.component';
import {ProductDetails} from './product-details/product-details.component';
const routes: Routes = [
  {path : '',redirectTo : 'product',pathMatch : 'full'},
  {path : 'addProduct',component : AddProductComponent},
  {path : 'removeProducts',component:RemoveProductsComponent},
  {path : 'product/:productCategoryName',component : GetProductsComponent},
  {path : 'updateProductWarranty',component : UpdateProductWarrantyComponent},
  {path : 'engineer/productCategoryName/:productCategoryName',component:GetEngineerByProductComponent},
  {path : 'complaint/productCategoryName/:productCategoryName',component:GetProductComplaintsComponent},
  {path : 'product/:productCategoryName',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
