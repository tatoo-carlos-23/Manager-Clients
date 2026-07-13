import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { from, map } from 'rxjs';
import { ILoginWithGoogle } from './auth.types';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private readonly angularFireAuth: AngularFireAuth) {}

  public loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return from(
      this.angularFireAuth.signInWithPopup(provider),
    ).pipe<ILoginWithGoogle>(map((r) => ({ fullName: r.user?.displayName })));
  }

  public myInfo() {
    return this.angularFireAuth.authState.pipe<ILoginWithGoogle>(
      map((r) => ({ fullName: r?.displayName })),
    );
  }

  public logout() {
    return this.angularFireAuth.signOut();
  }
}
