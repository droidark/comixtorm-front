import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  templateUrl: 'search.component.html'
})
export class SearchComponent {
  @ViewChild('f') searchForm: NgForm;

  onSubmit() {
    console.log(this.searchForm.value.filter + ' ' + this.searchForm.value.search);
  }
}
