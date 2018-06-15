import {NgModule} from '@angular/core';
import {CollectionListComponent} from './collection-list.component';
import {CollectionRoutingModule} from './collection-routing.module';

@NgModule({
  imports: [
    CollectionRoutingModule
  ],
  declarations: [
    CollectionListComponent
  ]
})
export class CollectionModule { }
