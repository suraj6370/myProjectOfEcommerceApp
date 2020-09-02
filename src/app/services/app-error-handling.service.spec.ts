import { TestBed } from '@angular/core/testing';

import { AppErrorHandlingService } from './app-error-handling.service';

describe('AppErrorHandlingService', () => {
  let service: AppErrorHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppErrorHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
