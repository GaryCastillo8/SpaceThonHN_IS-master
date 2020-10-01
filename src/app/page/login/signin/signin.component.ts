import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/user';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SignInComponent implements OnInit {
  save = false;
  form: FormGroup;
  constructor(
    private router: Router,
    private userService: UserService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public login(): void {
    if (this.form.invalid) {
      return;
    }
    const user: User = this.form.getRawValue();

    this.userService.login(user).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));

        this.router.navigate(['mediciones']);
      },
      (err) => {
        if (err.error.message == 'Invalid credentials') {
          alert('Correo o contraseña incorrectos');
        }
        console.log(err);
      }
    );
  }
}
