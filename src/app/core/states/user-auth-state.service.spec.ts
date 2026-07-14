import { TestBed } from '@angular/core/testing';

import { UserAuthStateService } from './user-auth-state.service';

describe('UserAuthStateService', () => {
  let service: UserAuthStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuthStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
