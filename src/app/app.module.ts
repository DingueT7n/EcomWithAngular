import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HttpClient,HttpClientModule  } from "@angular/common/http";
import { ShopModule } from './shop/shop.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   CoreModule,
   HttpClientModule,
   ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
