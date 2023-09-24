import { TestBed } from '@angular/core/testing';
import { CanActivate } from '@angular/router';

import { GuardGuard } from './guard.guard';

describe('GuardGuard', () => {
  let guard: CanActivate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
