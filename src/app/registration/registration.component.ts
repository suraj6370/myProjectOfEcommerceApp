import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ProductServices } from '../product.service';
import { Product } from '../product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {map,catchError} from 'rxjs/operators';

import { Subscription ,pipe, Observable} from 'rxjs';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {


  constructor(private productServi :ProductServices,private http:HttpClient) { }

  ngOnInit(): void {
  }


  onCreatePost(postData: { name: string, lastname: string, email: string, address: string, password: string,reInterPassword:string})
  {


    this.http.post('http://localhost:3006/api/signup',postData).subscribe(responseData => {
                alert('your account is successfully has been created');
                window.location.replace('');

      },(error)=>{
                    alert("your entered password dont match or email already registered");
       }
      );

  }



}
