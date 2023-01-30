import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

//views
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { ForgottenPasswordComponent } from './views/forgotten-password/forgotten-password.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';

import { MsalModule, MsalService, MSAL_INSTANCE, MsalGuardConfiguration, MsalInterceptorConfiguration, MsalInterceptor, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { MsLoginComponent } from './components/ms-login/ms-login.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '63428ec4-fa71-4b3b-b883-0e4cbf9a1937',
      authority: 'https://login.microsoftonline.com/50bcacfe-ca53-4b82-80c6-7d049d449f06',
      redirectUri: 'https://angularhostingtest-9322c.firebaseapp.com'
    }
    ,
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
    }
  })
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    CreateAccountComponent,
    ForgottenPasswordComponent,
    LoginPageComponent,
    ForgetPasswordComponent,
    MsLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSnackBarModule,
    MatExpansionModule,
    MsalModule,
    HttpClientModule
  ],
  providers: [{
    provide: MSAL_INSTANCE,
    useFactory: MSALInstanceFactory
  },
    MsalService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
