import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sell-on-my-shop',
  templateUrl: './sell-on-my-shop.component.html',
  styleUrls: ['./sell-on-my-shop.component.css']
})
export class SellOnMyShopComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onCreatePost(postValue:{name:string,fProductImagePath:string[],mrp:number,price:number,stock:number,description:string}){

    console.log(postValue);

    this.http.post('http://localhost:3006/api/product/create',postValue).subscribe(responseData => {
                alert('you uploaded account successfully');
                window.location.replace('');

      },(error)=>{
                    alert("something went wrong");
       }
      );

  }
}
