import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {

  baseURl:string=environment.baseURl;
  validationErrors:any;

  constructor(private http:HttpClient) {
   }

  ngOnInit(): void {
  }

  get404Error(){
    this.http.get(this.baseURl+'Bugs/Not-Found').subscribe({
      next:(next)=>console.info(next),
      error:(err)=>console.error(err)
    
    });
  }
  get400Error(){
    this.http.get(this.baseURl+'Bugs/Bad-Request').subscribe({
      next:(next)=>console.info(next),
      error:(err)=>console.error(err)
    
    });
  }
  get500Error(){
    this.http.get(this.baseURl+'Bugs/server-error').subscribe({
      next:(next)=>console.info(next),
      error:(err)=>console.error(err)
    
    });
  }
  get400ValidationError(){
    this.http.get(this.baseURl+'Bugs/Bad-Request/quatre').subscribe({
      next:(next)=>console.info(next),
      error: (err) => this.validationErrors = err.errors

    
    });
  }

}
