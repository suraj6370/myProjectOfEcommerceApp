import { Component, OnInit } from '@angular/core';
import {CartServices} from '../cart.service';
import {Cart} from '../cart.model'

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  constructor(private cartSer:CartServices) { }
   total:number;
   cart:Cart[];
  ngOnInit(): void {

             this.cart = this.cartSer.getcart();
             this.total = this.cartSer.Total;
             this.cartSer.deleteAll();
  }

}
