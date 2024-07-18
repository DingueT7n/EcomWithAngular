import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/shared/Models/Products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product:IProducts
  constructor(private shopService:ShopService,private activateRoute:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.loadingProduct();
  }
   loadingProduct(){
     this.shopService.getProdcutById(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(res =>{
      this.product =res;
     })
  }

}
