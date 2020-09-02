import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductServices } from '../product.service';
import {CartServices} from  '../cart.service';


@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.css']
})
export class ProductGroupComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private  router: Router,private http:HttpClient,private cartServi:CartServices) { }
  products : Product[];

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

       });
  }
}
