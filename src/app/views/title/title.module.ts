import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleRoutingModule} from './title-routing.module';
import {TitleComponent} from './title.component';

@NgModule({
  imports: [
    CommonModule,
    TitleRoutingModule
  ],
  declarations: [
    TitleComponent
  ]
})
export class TitleModule {}
