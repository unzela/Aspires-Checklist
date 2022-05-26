import { TestBed } from '@angular/core/testing';

import { ConnectifyService } from './connectify.service';

describe('ConnectifyService', () => {
  let service: ConnectifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
