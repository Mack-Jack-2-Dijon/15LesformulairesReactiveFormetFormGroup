import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from './email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public fb: FormBuilder) {}

  userForm = this.fb.group({
    credentials: this.fb.group({
      email: ['', [Validators.required, passwordValidator()]],
      password: ['', [Validators.required, passwordValidator()]],
    }),
  });
}
