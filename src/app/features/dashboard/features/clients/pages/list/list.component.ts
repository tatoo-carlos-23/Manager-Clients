import { Component, OnDestroy } from '@angular/core';
import { ClientCollectModel, ClientsApiService } from '@mc/api/clients';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddModalComponent, IAddModalData } from '../../modals/add-modal';
import {
  DeleteModalComponent,
  IDeleteModalData,
} from '../../modals/delete-modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>();

  public dataSource$ = new BehaviorSubject<ClientCollectModel[]>([]);

  constructor(
    private readonly clientsApiService: ClientsApiService,
    private readonly nzModalService: NzModalService,
  ) {
    this.getData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getData() {
    this.clientsApiService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((r) => this.dataSource$.next(r));
  }

  public openModal(client?: ClientCollectModel) {
    this.nzModalService.create<AddModalComponent, IAddModalData>({
      nzContent: AddModalComponent,
      nzTitle: client ? 'Actualizar cliente' : 'Crear cliente',
      nzFooter: null,
      nzCloseIcon: undefined,
      nzMaskClosable: false,
      nzData: {
        onFinish: () => {
          console.warn('Se finalizo');
        },
        client,
      },
    });
  }

  public changeDelete(client: ClientCollectModel) {
    this.nzModalService.create<DeleteModalComponent, IDeleteModalData>({
      nzContent: DeleteModalComponent,
      nzTitle: 'Eliminar cliente',
      nzFooter: null,
      nzCloseIcon: undefined,
      nzMaskClosable: false,
      nzData: {
        onFinish: () => {
          console.warn('Se finalizo elimninacion');
        },
        client,
      },
    });
  }
}
