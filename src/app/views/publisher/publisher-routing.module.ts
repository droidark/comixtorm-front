import {RouterModule, Routes} from '@angular/router';
import {PublisherComponent} from './publisher.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: PublisherComponent,
    data: {
      title: 'Publisher'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublisherRoutingModule {}
