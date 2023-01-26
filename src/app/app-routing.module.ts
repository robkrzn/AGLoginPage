import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

//views
import { AboutComponent } from './views/about/about.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { ForgottenPasswordComponent } from './views/forgotten-password/forgotten-password.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'forgottenPassword', component: ForgottenPasswordComponent },
  { path: 'createAccount', component: CreateAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
