import { Timestamp } from '@angular/fire/firestore';

export interface IClientCollect {
  names: string;
  lastNames: string;
  birthDate: Timestamp;
}

export interface IAddClientCollect extends Pick<
  IClientCollect,
  'names' | 'lastNames'
> {
  birthDate: Date;
}

export class ClientCollectModel {
  id!: string;
  names!: string;
  lastNames!: string;
  birthDate!: Date;
  years!: number;

  constructor(client: IClientCollect, id: string) {
    this.id = id;
    this.names = client.names;
    this.lastNames = client.lastNames;
    this.birthDate = client.birthDate.toDate();
    this.years = this.calculateAge(this.birthDate);
  }

  private calculateAge(date: Date): number {
    const now = new Date();
    let years = now.getFullYear() - date.getFullYear();

    const mes = now.getMonth() - date.getMonth();
    if (mes < 0 || (mes === 0 && now.getDate() < date.getDate())) {
      years--;
    }
    return years;
  }
}
