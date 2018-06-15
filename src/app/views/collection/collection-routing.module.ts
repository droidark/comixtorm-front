import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {CollectionListComponent} from './collection-list.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionListComponent,
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
