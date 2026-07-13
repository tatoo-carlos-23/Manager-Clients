import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserAuthModel } from '@mc/api/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() user!: UserAuthModel;

  @Output() logout = new EventEmitter<void>();

  public onLogout() {
    this.logout.emit();
  }
}
