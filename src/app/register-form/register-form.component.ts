import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {
  musicGenres: string[] = [ 'Country Music', ' Electronic Music', 'Funk', 'Hip hop', 'Jazz', 'Latin Music', 'Pop Music', 'Soul Music and R&B', 'Rock Metal Music'];
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    passGr: new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('', [Validators.required]),
    }),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]),
    favorite: new FormControl(''),
  });
  constructor() {
  }
  ngOnInit(): void {
  }
  getUserName() {
    return this.registerForm.get('username');
  }
  getPassword() {
    return this.registerForm.get('password');
  }
  getConfirmPass() {
    return this.registerForm.get('confirm');
  }
  getFirstName() {
    return this.registerForm.get('firstname');
  }
  getLastName() {
    return this.registerForm.get('lastname');
  }
  getDob() {
    return this.registerForm.get('dob');
  }
  getEmail() {
    return this.registerForm.get('email');
  }
  getPhone() {
    return this.registerForm.get('phone');
  }
}
