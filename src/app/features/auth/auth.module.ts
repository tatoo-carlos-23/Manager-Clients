import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireAuthModule,
    NzIconModule,
  ],
})
export class AuthModule {}
