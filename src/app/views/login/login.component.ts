import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../shared/services/login.service';
import 'rxjs/add/operator/map';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    this.loginService.loginUser(this.loginForm.value.username, this.loginForm.value.password);
  }
}
