import {NgModule} from '@angular/core';
import {SearchComponent} from './search.component';
import {SearchRoutingModule} from './search-routing.module';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    BsDropdownModule.forRoot(),
    FormsModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
