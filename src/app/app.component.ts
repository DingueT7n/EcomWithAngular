import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { IProducts } from './shared/Models/Products';
import { IPagniation } from './shared/Models/Pagniation';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'E-Commerce';
 
  constructor(private basketService:BasketService) { }

  ngOnInit(): void {
   // this.testReduce();
   const basketId = localStorage.getItem('basket_id');
   if(basketId){
     this.basketService.getBasket(basketId).subscribe({
       next:()=>{console.log('intialBasket')},
       error:(err)=>{console.error(err)}
     })
   }
 }
 
}
