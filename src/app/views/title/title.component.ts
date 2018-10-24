import {Component, OnInit} from '@angular/core';
import {TitleService} from '../../shared/services/title.service';
import {ActivatedRoute} from '@angular/router';
import {Title} from '../../shared/model/title.model';
import {UserService} from '../../shared/services/user.service';

@Component({
  templateUrl: 'title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title: Title;
  constructor(private titleService: TitleService, private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.titleService.findTitleByVanityAndPublisher(this.route.snapshot.params['publisher'],
      this.route.snapshot.params['title']).subscribe((data: Title) => {
        this.title = data;
    });
  }

  addToCollection(publisherId: number, titleId: number, issueId: number, coverId: number, index: number) {
    this.title.issues[index].collected = !this.title.issues[index].collected;
    this.userService.saveOrDeleteIssueToCollection(
      publisherId, titleId, issueId, coverId, this.title.issues[index].collected).subscribe();
  }
}
