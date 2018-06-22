import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    data: {
      title: 'Search'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {

}
