import {RouterModule, Routes} from '@angular/router';
import {TitleComponent} from './title.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: TitleComponent,
    data: {
      title: 'Title'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TitleRoutingModule {}
