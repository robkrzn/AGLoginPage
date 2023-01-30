import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AccountInfo, AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-ms-login',
  templateUrl: './ms-login.component.html',
  styleUrls: ['./ms-login.component.scss']
})
export class MsLoginComponent {

  userName: string = "user";
  loginDisplay = false;

  constructor(private msalService: MsalService) {

  }

  isLoggedIn() {
    return this.msalService.instance.getActiveAccount() != null;
    //this.loginDisplay = this.msalService.instance.getAllAccounts().length > 0;
  }

  // isLoggedUserIn(): string {
  //   let userInfo: AccountInfo = this.msalService.instance.getAllAccounts()[0];
  //   return userInfo ? userInfo.username : "asds";

  // }

  // login() {
  //   this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
  //     this.msalService.instance.setActiveAccount(response.account),
  //       this.userName = response.account?.username || '';
  //   });
  // }

  login() {
    this.msalService.loginPopup()
      .subscribe({
        next: (result) => {
          console.log(result);
          this.isLoggedIn();
        },
        error: (error) => console.log(error)
      });
  }

  logout() {
    this.msalService.logoutPopup();
  }
}
