import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '@mc/api/auth';
import { lastValueFrom, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly authApiService: AuthApiService,
    private readonly router: Router,
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async loginWithGoogle() {
    try {
      const obsLogin = this.authApiService
        .loginWithGoogle()
        .pipe(takeUntil(this.destroy$));
      await lastValueFrom(obsLogin);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.warn('Error', error);
    }
  }
}
