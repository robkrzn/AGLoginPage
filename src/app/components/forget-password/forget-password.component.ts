import { Component, InjectionToken, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  providers:[

  ]
})
export class ForgetPasswordComponent {

  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    
  }

  emailForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  })

  onSubmit() {
    if (!this.emailForm.valid) {
      return;
    }
    this.snackBar.open('Na zadaný email bolo odoslané nové heslo.','', { duration: 2000, });
    this.router.navigate(['/']);
  }

}
