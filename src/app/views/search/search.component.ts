import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {IssueService} from '../../shared/services/issue.service';
import {Issue} from '../../shared/model/issue.model';
import {UserService} from '../../shared/services/user.service';
import {Title} from '../../shared/model/title.model';
import {Cover} from '../../shared/model/cover.model';
import {User} from '../../shared/model/user.model';
import {Publisher} from '../../shared/model/publisher.model';

@Component({
  templateUrl: 'search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  issues: Issue[];
  isEmpty = true;

  constructor(private issueService: IssueService, private userService: UserService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      'filter': new FormControl(null, Validators.required),
      'search': new FormControl(null, Validators.required)
    });
  }

  addToCollection(publisherId: number, titleId: number, issueId: number, coverId: number, index: number) {
    this.issues[index].collected = !this.issues[index].collected;
    this.userService.saveOrDeleteIssueToCollection(
      publisherId, titleId, issueId, coverId, this.issues[index].collected).subscribe();
  }

  onSubmit() {
    this.issueService.findIssuesByCriterion(this.searchForm.value.filter, this.searchForm.value.search).subscribe((data: Issue[]) => {
      this.issues = data;
      this.isEmpty = this.issues.length > 0 ? false : true;
    });
  }
}
