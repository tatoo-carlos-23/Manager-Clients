export class UserAuthModel {
  fullName!: string;
  firstLetter!: string;
  constructor(fullName?: string | null) {
    if (!fullName) throw new Error('Se requiere session activa');
    this.fullName = fullName;
    this.firstLetter = fullName[0];
  }
}
