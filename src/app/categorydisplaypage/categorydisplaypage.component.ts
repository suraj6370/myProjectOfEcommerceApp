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
  selector: 'app-categorydisplaypage',
  templateUrl: './categorydisplaypage.component.html',
  styleUrls: ['./categorydisplaypage.component.css']
})
export class CategorydisplaypageComponent implements OnInit {



  products:Product[];
  vProduct:Product[];
  id3:string;

  @ViewChild('ingre_qty') ingre_qty : ElementRef;
  constructor( private route: ActivatedRoute,private  router: Router,private http:HttpClient,private cartServi:CartServices) {
    }

  ngOnInit(): void {

    let id2 = this.route.snapshot.paramMap.get('id');

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

        const vProduct = [];
        for (const key in postArray)
        {
            if(postArray.hasOwnProperty(key))
            {
                if(postArray[key].category.valueOf() === id2)
                vProduct.push({...postArray[key]});
            }
        }
        this.products = vProduct;
        this.id3 =id2;
       });
   }

}
