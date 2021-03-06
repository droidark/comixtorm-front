import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {CollectionComponent} from './collection.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionComponent,
    data: {
      title: 'Collection'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
