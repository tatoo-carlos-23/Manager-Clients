import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthApiService } from '@mc/api/auth';
import { UserAuthState } from '@mc/states/user-auth-state.service';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardGuard implements CanActivate {
  constructor(
    private readonly authApiService: AuthApiService,
    private readonly router: Router,
    private readonly userAuthState: UserAuthState,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> {
    return this.authApiService.myInfo().pipe(
      take(1),
      map((r) => {
        const isUserActive = r?.fullName;
        if (isUserActive) {
          this.userAuthState.set(r);
          return true;
        }
        return this.router.createUrlTree(['/']);
      }),
    );
  }
}
