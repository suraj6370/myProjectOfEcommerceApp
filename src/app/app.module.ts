import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FooterComponent } from './footer/footer.component';
import { ProductGroupComponent } from './product-group/product-group.component';

import { SellOnMyShopComponent } from './sell-on-my-shop/sell-on-my-shop.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ChangepageComponent } from './changepage/changepage.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { MyloginComponent } from './mylogin/mylogin.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { SortbynameproductComponent } from './sortbynameproduct/sortbynameproduct.component';
import { SortbypriceproductComponent } from './sortbypriceproduct/sortbypriceproduct.component';

import  { ProductServices } from './product.service';
import  {CartServices} from './cart.service';
import   {NewOrderServices} from './neworder.service'
import { CategorydisplaypageComponent } from './categorydisplaypage/categorydisplaypage.component';
import { ProductbysubgroupComponent } from './productbysubgroup/productbysubgroup.component';
import { SortnameComponent } from './sortname/sortname.component';
import { SortpriceComponent } from './sortprice/sortprice.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
    RegistrationComponent,
    ProductDetailsComponent,
    FooterComponent,
    ProductGroupComponent,

    SellOnMyShopComponent,
    AboutUsComponent,
    MyCartComponent,

    ChangepageComponent,
    MyOrderComponent,
    MyloginComponent,
    SortbynameproductComponent,
    SortbypriceproductComponent,
    CategorydisplaypageComponent,
    ProductbysubgroupComponent,
    SortnameComponent,
    SortpriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductServices,CartServices,NewOrderServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
