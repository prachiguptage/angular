import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponentComponent } from './add-component/add-component.component';
import { FormsModule } from '@angular/forms';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ListComponentComponent } from './list-component/list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponentComponent,
    SearchComponentComponent,
    ListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
