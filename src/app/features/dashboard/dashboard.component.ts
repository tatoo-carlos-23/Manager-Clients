import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '@mc/api/auth';
import { UserAuthState } from '@mc/states/user-auth-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public myInfo$ = this.authApiService.myInfo();

  constructor(
    public readonly authApiService: AuthApiService,
    private readonly router: Router,
    private readonly userAuthState: UserAuthState,
  ) {}

  async handlerLogout() {
    await this.authApiService.logout();
    this.userAuthState.clear();
    this.router.navigate([`/`]);
  }
}
