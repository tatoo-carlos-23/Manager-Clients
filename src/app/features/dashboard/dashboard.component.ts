import { Component } from '@angular/core';
import { AuthApiService } from '@mc/api/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private readonly authApiService: AuthApiService) {
    this.authApiService.myInfo().subscribe((r) => {
      console.warn('===> ', r);
    });
  }
}
