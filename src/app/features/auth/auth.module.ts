import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RecoveryPassComponent } from './components/recovery-pass/recovery-pass.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RecoveryPassComponent],
  imports: [CommonModule, AuthRoutingModule, AngularFireAuthModule],
})
export class AuthModule {}
