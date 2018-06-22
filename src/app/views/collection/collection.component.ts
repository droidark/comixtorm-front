import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {Title} from '../../shared/model/Title';

@Component({
  templateUrl: 'collection.component.html'
})
export class CollectionComponent implements OnInit {
  comicCollection: Title[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findTitlesByUsername().subscribe((data: Title[]) => {
      this.comicCollection = data;
    });
  }
}
