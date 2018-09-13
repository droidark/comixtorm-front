import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublisherComponent} from './publisher.component';
import {PublisherRoutingModule} from './publisher-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PublisherRoutingModule
  ],
  declarations: [
    PublisherComponent
  ]
})
export class PublisherModule {}
