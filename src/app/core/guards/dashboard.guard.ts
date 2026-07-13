import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthApiService } from '@mc/api/auth';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardGuard implements CanActivate {
  constructor(
    private readonly authApiService: AuthApiService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> {
    return this.authApiService.myInfo().pipe(
      take(1),
      map((r) => {
        const isUserActive = r?.fullName;
        if (isUserActive) return true;
        return this.router.createUrlTree(['/']);
      }),
    );
  }
}
