import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { IProducts } from './shared/Models/Products';
import { IPagniation } from './shared/Models/Pagniation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'E-Commerce';
 
  constructor() {}

  ngOnInit(): void {
  
  }
}
