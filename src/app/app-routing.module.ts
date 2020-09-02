import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductGroupComponent } from './product-group/product-group.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SellOnMyShopComponent } from './sell-on-my-shop/sell-on-my-shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { ChangepageComponent } from './changepage/changepage.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import { SortbypriceproductComponent } from './sortbypriceproduct/sortbypriceproduct.component';
import { SortbynameproductComponent } from './sortbynameproduct/sortbynameproduct.component';
import { CategorydisplaypageComponent } from './categorydisplaypage/categorydisplaypage.component';
import { ProductbysubgroupComponent } from './productbysubgroup/productbysubgroup.component';
import { SortpriceComponent } from './sortprice/sortprice.component';
import { SortnameComponent } from './sortname/sortname.component';



const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'sortprice',component:SortpriceComponent},
  {path:'sortname',component:SortnameComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'electronics/:id',component:CategorydisplaypageComponent},
  {path:'toys/:id',component:CategorydisplaypageComponent},
  {path:'clothes/:id',component:CategorydisplaypageComponent},
  {path:'beauty/:id',component:CategorydisplaypageComponent},
  {path:'displaybysubcategory/:id',component:ProductbysubgroupComponent},
  {path:'all',component:ProductGroupComponent},
  {path:'cart',component:MyCartComponent},
  {path:'sortbyprice/:id',component:SortbypriceproductComponent},
  {path:'sortbyname/:id',component:SortbynameproductComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'sellonmyshop',component:SellOnMyShopComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'myorders',component:MyOrderComponent},
  {path:'changepersonalinformation',component:ChangepageComponent},
  {path:'mylogininfo',component:MyloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
