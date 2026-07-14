import firebase from 'firebase/compat/app';

export class UserAuthModel {
  fullName!: string;
  firstLetter!: string;
  email!: string;
  uid!: string;

  constructor(user: firebase.User | null) {
    if (!user?.displayName || !user?.email) {
      throw new Error('Se requiere session activa');
    }

    this.fullName = user.displayName;
    this.firstLetter = user.displayName[0];
    this.email = user.email;
    this.uid = user.uid;
  }
}
