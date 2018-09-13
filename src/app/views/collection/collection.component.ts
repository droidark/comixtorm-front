import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {Publisher} from '../../shared/model/publisher.model';

@Component({
  templateUrl: 'collection.component.html'
})
export class CollectionComponent implements OnInit {
  publishers: Publisher[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findTitlesByUsername().subscribe((data: Publisher[]) => {
      this.publishers = data;
    });
  }
}
