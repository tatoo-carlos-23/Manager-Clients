import { AfterViewInit, Component, Inject, TemplateRef } from '@angular/core';
import { NzModalRef, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';
import { IAddModalData } from './add-modal.types';
import { AddModalPresenter } from './add-modal.presenter';
import { BehaviorSubject, Subject } from 'rxjs';
import { ClientsApiService } from '@mc/api/clients';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
  providers: [AddModalPresenter],
})
export class AddModalComponent implements AfterViewInit {
  public readonly isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(
    public readonly addModalPresenter: AddModalPresenter,
    @Inject(NZ_MODAL_DATA)
    public readonly nzModalData: IAddModalData,
    private readonly nzModalRef: NzModalRef,
    private readonly clientsApiService: ClientsApiService,
    private readonly nzMessageService: NzMessageService,
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const client = this.nzModalData.client;
      if (client) {
        this.addModalPresenter.names?.setValue(client.names);
        this.addModalPresenter.lastNames?.setValue(client.lastNames);
        this.addModalPresenter.birthDate?.setValue(client.birthDate);
      }
    }, 10);
  }

  public cancel() {
    this.nzModalRef.close();
  }

  public async continue(registerOk: TemplateRef<any>) {
    Object.values(this.addModalPresenter.form.controls).forEach((control) => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });

    if (this.addModalPresenter.form.invalid) return;

    const id = this.nzModalData.client?.id;

    if (id) {
      this.update(registerOk, id);
      return;
    }

    this.save(registerOk);
  }

  private async save(registerOk: TemplateRef<any>) {
    try {
      const form = this.addModalPresenter.form.value;
      this.isLoading$.next(true);
      await this.clientsApiService.add(form);
      this.nzModalRef.close();
      this.nzModalData?.onFinish?.();
      this.nzMessageService.success(registerOk);
    } catch (error) {
      this.nzMessageService.error(
        `Ocurrio un error, intente nuevamente si es que desea`,
      );
    } finally {
      this.isLoading$.next(false);
    }
  }

  private async update(updateOk: TemplateRef<any>, id: string) {
    try {
      const form = this.addModalPresenter.form.value;
      this.isLoading$.next(true);
      await this.clientsApiService.update(form, id);
      this.nzModalRef.close();
      this.nzModalData?.onFinish?.();
      this.nzMessageService.success(updateOk);
    } catch (error) {
      this.nzMessageService.error(
        `Ocurrio un error, intente nuevamente si es que desea`,
      );
    } finally {
      this.isLoading$.next(false);
    }
  }
}
