import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IssueService} from '../../shared/services/issue.service';
import {Issue} from '../../shared/model/issue.model';

@Component({
  templateUrl: 'issue.component.html',
  styleUrls: ['issue.component.css']
})
export class IssueComponent implements OnInit {

  issue: Issue;

  constructor(private issueService: IssueService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const urlpublisher: string = this.route.snapshot.params['publisher'];
    const urltitle: string = this.route.snapshot.params['title'];
    const urlissue: string = this.route.snapshot.params['issue'];

    this.issueService.findIssueByVanityAndTitle(urlpublisher, urltitle, urlissue).subscribe((data: Issue) => {
         this.issue = data;
     });
  }
}
