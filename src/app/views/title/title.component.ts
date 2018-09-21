import {Component, OnInit} from '@angular/core';
import {TitleService} from '../../shared/services/title.service';
import {ActivatedRoute} from '@angular/router';
import {Title} from '../../shared/model/title.model';

@Component({
  templateUrl: 'title.component.html'
})
export class TitleComponent implements OnInit {

  constructor(private titleService: TitleService, private route: ActivatedRoute) {}
  title: Title;

  ngOnInit(): void {
    this.titleService.findTitleByVanityAndPublisher(this.route.snapshot.params['publisher'],
      this.route.snapshot.params['title']).subscribe((data: Title) => {
        this.title = data;
    });
  }
}
