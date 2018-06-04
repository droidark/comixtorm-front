import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../../shared/services/login.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.loginUser(this.loginForm.value.username, this.loginForm.value.password);
  }
}
