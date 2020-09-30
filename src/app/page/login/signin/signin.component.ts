import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/user';

@Component({
  selector: 'app-form',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {
  save = false;
  form: FormGroup;
  constructor(
    private router: Router,
    public fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
    if ( localStorage.getItem('email') ) {
      this.form.get('email').setValue(localStorage.getItem('email'));
      this.save = true;
    }

    this.form.valueChanges.subscribe(value => {
      console.log(this.form.invalid);
    });

  }

  private createForm(): void {
    this.form = this.fb.group({
      email:      ['', Validators.required],
      password:   ['', Validators.required],
      save:       [false],
    });
  }

  public login(): void {
    if (  this.form.invalid ) { return; }
    const user: User = this.form.getRawValue();
    this.save = this.form.get('save').value;
    console.log('User Data: ', user);

    /* Ejecutar cuando el servidor devuelva que el usuario si existe.
    this.router.navigateByUrl('/main');
    */
  }

}
