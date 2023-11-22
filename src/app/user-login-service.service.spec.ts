import { TestBed } from '@angular/core/testing';

import { UserLoginServiceService } from './user-login-service.service';

describe('UserLoginServiceService', () => {
  let service: UserLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
