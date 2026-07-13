import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '@mc/api/auth';

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
  ) {
    // this.authApiService.myInfo().subscribe((r) => {
    //   console.warn('===> ', r);
    // });
  }

  async handlerLogout() {
    await this.authApiService.logout();
    this.router.navigate([`/`]);
  }
}
