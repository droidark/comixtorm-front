import {NgModule} from '@angular/core';
import {CollectionComponent} from './collection.component';
import {CollectionRoutingModule} from './collection-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CollectionRoutingModule
  ],
  declarations: [
    CollectionComponent
  ]
})
export class CollectionModule { }
