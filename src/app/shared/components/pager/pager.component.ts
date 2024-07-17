import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {

  
  @Input() totalCount:number;
  @Input() pageSize : number=6;
  @Output() pageChanged  = new EventEmitter<number>();
  constructor(
    
  ) { }

  ngOnInit(): void {
  }
  onPagerChaged(event:any){
    this.pageChanged.emit(event);

  }
}