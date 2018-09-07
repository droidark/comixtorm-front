import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
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
export class SearchComponent {
  @ViewChild('f') searchForm: NgForm;
  issues: Issue[];
  isEmpty = true;

  constructor(private issueService: IssueService, private userService: UserService) {}

  addToCollection(publisherId: number, titleId: number, issueId: number, coverId: number, index: number) {
    const publisher: Publisher = new Publisher();
    const title: Title = new Title();
    const titles: Title[] = [];
    const issue: Issue = new Issue();
    const issues: Issue[] = [];
    const cover: Cover = new Cover();
    const covers: Cover[] = [];
    cover.id = coverId;
    covers.push(cover);
    issue.id = issueId;
    issue.covers = covers;
    issues.push(issue);
    title.id = titleId;
    title.issues = issues;
    titles.push(title);
    publisher.id = publisherId;
    publisher.titles = titles;
    if(this.issues[index].collected) {
      this.userService.saveIssueToCollection(publisher).subscribe();
    } else {
      this.userService.deleteIssueToCollection(publisher).subscribe();
    }
    this.issues[index].collected = !this.issues[index].collected;
  }

  onSubmit() {
    this.issueService.findIssuesByCriterion(this.searchForm.value.filter, this.searchForm.value.search).subscribe((data: Issue[]) => {
      this.issues = data;
      this.isEmpty = this.issues.length > 0 ? false : true;
    });
  }
}
