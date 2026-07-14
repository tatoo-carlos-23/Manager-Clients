import { Component, Inject } from '@angular/core';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { BehaviorSubject } from 'rxjs';
import { IDeleteModalData } from './delete-modal.types';
import { ClientsApiService } from '@mc/api/clients';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent {
  public readonly isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject(NZ_MODAL_DATA)
    public readonly nzModalData: IDeleteModalData,
    private readonly nzModalRef: NzModalRef,
    private readonly clientsApiService: ClientsApiService,
    private readonly nzMessageService: NzMessageService,
  ) {}

  public cancel() {
    this.nzModalRef.close();
  }

  public async continue() {
    try {
      this.isLoading$.next(true);
      await this.clientsApiService.delete(this.nzModalData.client.id);
      const names = this.nzModalData.client.names;
      this.nzModalRef.close();
      this.nzModalData?.onFinish?.();
      this.nzMessageService.success(`Cliente ${names} eliminado exitosamente`);
    } catch (error) {
      this.nzMessageService.error(
        `Ocurrio un error, intente nuevamente si es que desea`,
      );
    } finally {
      this.isLoading$.next(false);
    }
  }
}
