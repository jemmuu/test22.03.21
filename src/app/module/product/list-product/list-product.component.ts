import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  _data  =[];

  constructor() {

    if(localStorage.getItem('data'))
    {
      this._data = JSON.parse(localStorage.getItem('data'));
      console.log(this._data);
    }
   }

  ngOnInit(): void {
  }

}
