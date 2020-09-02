import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cart } from '../cart.model';
import { CartServices } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { Order } from '../order.model';
import {OrderServices} from '../order.service';
import { from } from 'rxjs';
import { NewOrderServices } from '../neworder.service';


@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {


    constructor(private cartSer:CartServices,private http:HttpClient,private newOrde:NewOrderServices,private router:Router) { }

    cart : Cart[] = [] ;
    order : Order[];


    count : number ;
    total_final:number;

    ngOnInit(): void {
      this.cartSer.Total =0;
      this.cart = this.cartSer.getcart();
      this.count = this.cart.length;
      for(let i of this.cart)
      {
        this.cartSer.Total = this.cartSer.Total + i.product_total;
      }
      this.total_final = this.cartSer.Total;
   }


   deleteCart(index:number)
  {

    this.cartSer.deleteCart(index);
    this.total_final = this.cartSer.Total;
    this.cart = this.cartSer.getcart();
    this.count--;

  }

  moveOnOrderPage()
  {
      this.router.navigateByUrl('/myorders');
  }

  placeOrder2()
  {

    for(let i of this.cart)
    {
      const items =   new Order(i.product_id,i.product_name,i.product_count,i.product_price);
      this.newOrde.addToOrder(items);
    }

     let products2:Order[];

      products2 = this.newOrde.getOrder();
      let  amount = this.cartSer.Total;
      let  address = "pune";
      let   user = "5ec43ca535a864729c349517";

      let postData =
      {
        products : products2,
        amount : amount,
        address :address,
        user : user


      }
    // console.log(products2);

    // console.log(postData);

       this.http.post('http://localhost:3006/api/order/create',postData).subscribe(responseData => {
          console.log(responseData);




          alert("Order is created !!!!");
        });

  }


}
