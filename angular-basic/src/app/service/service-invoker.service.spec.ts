import { TestBed } from '@angular/core/testing';

import { ServiceInvokerService } from './service-invoker.service';

describe('ServiceInvokerService', () => {
  let service: ServiceInvokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceInvokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
