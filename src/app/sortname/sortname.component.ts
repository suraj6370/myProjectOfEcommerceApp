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
  selector: 'app-sortname',
  templateUrl: './sortname.component.html',
  styleUrls: ['./sortname.component.css']
})

export class SortnameComponent implements OnInit {

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
        this.sortByName();
       });
  }
  sortByName():void
  {
      this.products.sort((a,b)=>{
             return(this.compare_item(a,b));
      });
  }

  compare_item(a:Product, b:Product):number{

    if(((a.name).toLowerCase) < ((b.name).toLowerCase)){
            return 1;

    }else if(((a.name).toLowerCase) > ((b.name).toLowerCase)){
            return -1;
    }else{
            return 0;
    }
   }
}
