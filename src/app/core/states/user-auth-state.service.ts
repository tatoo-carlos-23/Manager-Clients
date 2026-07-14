import { Injectable } from '@angular/core';
import { UserAuthModel } from '@mc/api/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthState {
  private readonly userValue$ = new BehaviorSubject<UserAuthModel | undefined>(
    undefined,
  );

  clear() {
    this.userValue$.next(undefined);
  }

  set(user: UserAuthModel | undefined) {
    this.userValue$.next(user);
  }

  get value$() {
    return this.userValue$.asObservable();
  }

  get value() {
    return this.userValue$.value;
  }
}
