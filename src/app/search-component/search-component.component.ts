import { Component, OnInit } from '@angular/core';
import {Query} from '../Query'

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   query='';
   previous=this.query;

   onChangeQuery(){
    Query.splice(0,1,this.query);
   }

}
