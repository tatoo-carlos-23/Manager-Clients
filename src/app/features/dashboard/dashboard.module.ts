import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzAvatarModule,
    NzPopconfirmModule,
  ],
})
export class DashboardModule {}
