import { Component, OnInit } from '@angular/core';
import {Contacts} from '../Contacts'
import {Query} from '../Query'

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  query = Query;
  contacts=Contacts;
  
  
  onDelete(contact){
    var index = this.contacts.indexOf(contact);
    Contacts.splice(index,1);
    this.contacts=Contacts;
  }
}
