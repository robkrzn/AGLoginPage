import { Component, InjectionToken, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  providers:[

  ]
})
export class ForgetPasswordComponent {

  constructor(private fb: FormBuilder) {
    
  }

  emailForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  })

  onSubmit() {
    if (!this.emailForm.valid) {
      return;
    }
    console.log(this.emailForm.value);
  }

}
