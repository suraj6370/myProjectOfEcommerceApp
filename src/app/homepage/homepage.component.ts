import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../product.service';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Category } from '../category.model';
import { Userlogin } from '../userlogin.model';

import { throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { SubCategory } from '../subcategory.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user = new BehaviorSubject<Userlogin>(null);

  username : string;
  session_set = false;

  constructor(private productServi :ProductServices,private http: HttpClient, private router: Router) { }

  category : Category[];
  subcategory: SubCategory[];

  ngOnInit(): void {


    this.username = sessionStorage.getItem("user_name");
    this.session_set = true;


    this.http.get<{[key:string]:Product}>("http://localhost:3006/api/category")
    .pipe(map(responseData => {
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))
            {
                postArray.push({...responseData[key],id:key})
            }
        }

        return postArray;


    })).subscribe(category =>{
        this.category = category;
     });

    this.http.get<{[key:string]:Product}>("http://localhost:3006/api/subcategory")
    .pipe(map(responseData => {
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))
            {
                postArray.push({...responseData[key],id:key})
            }
        }

        return postArray;


    })).subscribe(subcategory =>{
        this.subcategory = subcategory;
     });



  }

    logout() {
    this.user.next(null);
    this.router.navigate(['/login']);

    localStorage.removeItem('userData');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_id');

    sessionStorage.removeItem('user_name');
    this.session_set = false;
  }


}
