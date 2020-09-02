import { Component, OnInit, ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { CartServices } from '../cart.service';
import { ProductServices } from '../product.service';
import { Cart } from '../cart.model';
import { ProductNew } from '../productNew.model';


@Component({
  selector: 'app-sortprice',
  templateUrl: './sortprice.component.html',
  styleUrls: ['./sortprice.component.css']
})


export class SortpriceComponent implements OnInit {

  products:Product[];

  @ViewChild('ingre_qty') ingre_qty : ElementRef;
  constructor( private route: ActivatedRoute,private  router: Router,private http:HttpClient,private cartServi:CartServices) {
    }

  ngOnInit(): void {


    this.http.get<{[key:string]:Product}>("http://localhost:3006/api/product")
      .pipe(map(responseData =>{
          const postArray =[];
          for (const key in responseData)
          {
              if(responseData.hasOwnProperty(key))
              {
                  postArray.push({...responseData[key],id:key})
              }
          }

          //console.log(postArray);
          return postArray;


      })).subscribe(postArray =>{
        this.products = postArray;
        this.sortByPrice();
       });
  }
  sortByPrice():void{
    this.products.sort((a,b)=>{
      return((a.price>b.price)?1:((a.price<b.price)?(-1):0))});
   }

}
