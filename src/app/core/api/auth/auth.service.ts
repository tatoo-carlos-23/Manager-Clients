import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { from, map } from 'rxjs';
import { UserAuthModel } from './auth.types';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private readonly angularFireAuth: AngularFireAuth) {}

  public loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return from(this.angularFireAuth.signInWithPopup(provider)).pipe<
      UserAuthModel | undefined
    >(map((r) => (r ? new UserAuthModel(r.user?.displayName) : undefined)));
  }

  public myInfo() {
    return this.angularFireAuth.authState.pipe<UserAuthModel | undefined>(
      map((r) => (r ? new UserAuthModel(r?.displayName) : undefined)),
    );
  }

  public logout() {
    return this.angularFireAuth.signOut();
  }
}
