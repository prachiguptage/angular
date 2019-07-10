import { Component, OnInit } from '@angular/core';

import {Contact} from '../contact';
import {Contacts} from '../Contacts';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model= new Contact('','');

  onSubmit() { 
               Contacts.push(this.model);
              this.model = new Contact('','') }

  

}
