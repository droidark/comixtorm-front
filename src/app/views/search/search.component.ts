import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {IssueService} from '../../shared/services/issue.service';
import {Issue} from '../../shared/model/issue.model';

@Component({
  templateUrl: 'search.component.html'
})
export class SearchComponent {
  @ViewChild('f') searchForm: NgForm;
  issues: Issue[];
  isEmpty = true;

  constructor(private issueService: IssueService) {}

  onSubmit() {
    console.log(this.searchForm.value.filter + ' ' + this.searchForm.value.search);
    this.issueService.findIssuesByCriterion(this.searchForm.value.filter, this.searchForm.value.search).subscribe((data: Issue[]) => {
      this.issues = data;
      this.isEmpty = this.issues.length > 0 ? false : true;
    });
  }
}
