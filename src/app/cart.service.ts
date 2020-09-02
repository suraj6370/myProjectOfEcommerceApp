
import {Cart} from './cart.model';
import { Component, EventEmitter} from '@angular/core';



export class CartServices
{
    CartChanged = new EventEmitter<Cart[]>();
    cart : Cart[] =[];
    Total:number;

    getcart()
    {
        return this.cart.slice();
    }


    addCart(cartitems:Cart)
      {
          this.cart.push(cartitems);
          this.CartChanged.emit(this.cart.slice());
      }

      deleteCart(index:number)
      {
        this.cart.splice(index, 1);
         this.Total = this.Total - this.cart[index].product_price;
      }

      deleteAll()
      {
           this.cart = [];
           this.Total = 0;
      }

}
