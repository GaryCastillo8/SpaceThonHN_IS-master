import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignUpComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      institution: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const user: any = this.form.getRawValue();

    this.userService.register(user).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));

        this.router.navigate(['mediciones']);
      },
      (err) => {
        if (err.error.error.error == 'Duplicate email') {
          alert('No puede usar este correo para crear un nuevo usauario');
        }
        console.log(err);
      }
    );
  }
}
