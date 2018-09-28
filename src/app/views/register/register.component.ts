import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../shared/model/user.model';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {RegisterService} from '../../shared/services/register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  usernameWarning = 'Invalid username, try again';
  emailWarning = 'Please, type a valid email';
  valid = {
    'username': true,
    'email': true,
    'password': true,
    'repeatPassword': true
  };
  registerForm: FormGroup;
  newUser: User;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['/dashboard']);
    }
    this.registerForm = new FormGroup({
      'username': new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'email': new FormControl(null, [
        Validators.required,
        Validators.email]),
      'password': new FormControl(null, [
        Validators.required,
        Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}')
      ]),
      'repeatPassword': new FormControl(null, [
        Validators.required,
        Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}')
      ])
    });
    // ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})
  }

  onFocus(input: string): void {
    this.valid[input] = true;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.valid.username = !this.registerForm.controls.username.invalid;
      this.valid.email = !this.registerForm.controls.email.invalid;
      this.valid.password = !this.registerForm.controls.password.invalid;
      this.valid.repeatPassword = !this.registerForm.controls.repeatPassword.invalid;
    } else {
      this.newUser = new User();
      this.newUser.username = this.registerForm.controls.username.value;
      this.newUser.password = this.registerForm.controls.password.value;
      this.newUser.email = this.registerForm.controls.email.value;

      this.registerService.newUser(this.newUser).subscribe(data => {
        this.router.navigate(['/login']);
      }, error => {
        if (error.error.message === 'User already exist!') {
          this.usernameWarning = 'Username already taken';
          this.valid.username = false;
        } else if (error.error.message === 'Email already exist!') {
          this.emailWarning = 'Email already in use';
          this.valid.email = false;
        }
      });
    }
  }
}
