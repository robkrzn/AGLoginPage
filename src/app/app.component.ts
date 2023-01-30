import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularWPATest';

  userName: string = "user";
  loginDisplay = false;

  constructor(private msalService: MsalService) {

  }
  ngOnInit(): void {
    this.msalService.instance.handleRedirectPromise().then(
      res => {
        if (res != null && res.account != null) {
          this.msalService.instance.setActiveAccount(res.account);
        }
      }
    )
  }

  isLoggedIn(): boolean {
    return this.msalService.instance.getActiveAccount() != null;
  }
  login() {
    // this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
    //   this.msalService.instance.setActiveAccount(response.account);
    //   this.userName = response.account?.username || '';
    //   this.loginDisplay = this.msalService.instance.getAllAccounts().length > 0;
    // });
    this.msalService.loginRedirect();
  }

  logout() {
    this.msalService.logoutRedirect();
  }

}
