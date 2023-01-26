import { Component, InjectionToken, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


//export const titleText = new InjectionToken<String>('titleText');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
  ]
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  createAcout: boolean = false;

  @Input() createAccount: boolean = false;
  titleText: string = 'Prihlásenie od Vášho účtu';
  buttonText: string = 'Prihlásiť';

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    
    private snackBar: MatSnackBar) {}


  ngOnInit() {
    this.setTextPlaces();
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    if(this.createAccount){
      this.snackBar.open('Účet bol úspešne vytvorený. ✌','', { duration: 2000, });
      this.router.navigate(['/']);
      return;
    }
    this.snackBar.open('Prihlásenie bolo úspešné. 👍','', { duration: 2000, });
    this.router.navigate(['/home']);
    console.log(this.loginForm.value);
  }

  setTextPlaces() {
    if (this.createAccount) {
      this.titleText = 'Vytvorenie nového účtu';
      this.buttonText = 'Vytvoriť účet';
    }
  }

}