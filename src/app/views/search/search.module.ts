import {NgModule} from '@angular/core';
import {SearchComponent} from './search.component';
import {SearchRoutingModule} from './search-routing.module';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    BsDropdownModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
