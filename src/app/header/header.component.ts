import { Component, OnInit } from '@angular/core';
import { CartServices } from '../cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private cartSer:CartServices){}
  total_product:number;
  ngOnInit(): void {
       this.total_product = this.cartSer.getcart().length;
  }

}
