import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Timestamp } from '@angular/fire/firestore';
import { environment } from '@env';
import { map } from 'rxjs';
import {
  ClientCollectModel,
  IAddClientCollect,
  IClientCollect,
} from './clients.types';
import { UserAuthState } from '@mc/states/user-auth-state.service';

@Injectable({
  providedIn: 'root',
})
export class ClientsApiService {
  private readonly COLLECTIONS = environment.configFirebase.collections;

  constructor(
    private readonly angularFirestore: AngularFirestore,
    private readonly userAuthState: UserAuthState,
  ) {}

  public getAll() {
    return this.angularFirestore
      .collection(this.COLLECTIONS.clients, (query) =>
        query.where('userId', '==', this.userAuthState?.value?.uid),
      )
      .snapshotChanges()
      .pipe(
        map((r) =>
          r.map(
            (r) =>
              new ClientCollectModel(
                r.payload.doc.data() as IClientCollect,
                r.payload.doc.id,
              ),
          ),
        ),
      );
  }

  public add(form: IAddClientCollect) {
    const getBd = form.birthDate;
    const birthDate = Timestamp.fromDate(
      new Date(getBd.getFullYear(), getBd.getMonth(), getBd.getDate()),
    );
    return this.angularFirestore.collection(this.COLLECTIONS.clients).add({
      ...form,
      birthDate,
      userId: this.userAuthState?.value?.uid,
    } as IClientCollect);
  }

  public update(form: IAddClientCollect, id: string) {
    const getBd = form.birthDate;
    const birthDate = Timestamp.fromDate(
      new Date(getBd.getFullYear(), getBd.getMonth(), getBd.getDate()),
    );
    return this.angularFirestore
      .collection(this.COLLECTIONS.clients)
      .doc(id)
      .update({
        ...form,
        birthDate,
      } as IClientCollect);
  }

  public delete(id: string) {
    return this.angularFirestore
      .collection(this.COLLECTIONS.clients)
      .doc(id)
      .delete();
  }
}
