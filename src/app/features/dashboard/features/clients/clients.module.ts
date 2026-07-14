import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ListComponent } from './pages/list/list.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BirthDatePipe } from './pipes/birth-date.pipe';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddModalComponent } from './modals/add-modal/add-modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    ClientsComponent,
    ListComponent,
    BirthDatePipe,
    AddModalComponent,
    DeleteModalComponent,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    AngularFirestoreModule,
    NzCardModule,
    NzIconModule,
    NzButtonModule,
    NzModalModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzDatePickerModule,
    NzMessageModule,
  ],
})
export class ClientsModule {}
