import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/user';

@Component({
  selector: 'app-singup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  public form: FormGroup;
  save = false;

  constructor(
    public fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      email:    ['', Validators.required],
      name:     ['', Validators.required],
      password: ['', Validators.required],
      save:     [false]
    });
  }

  onSubmit() {
    const user: User = this.form.getRawValue();
    this.save = this.form.get('save').value;
    console.log('UserToAdd: ', user);     // Clase user que se va mandar al servidor.
    /* ! Navega a una url definida, hacer en caso que el servidor devuelva una respuesta positiva al crear la cuenta.
    this.router.navigateByUrl('/main'); */
  }

}
