import { TestBed } from '@angular/core/testing';

import { RecservService } from './recserv.service';

describe('RecservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecservService = TestBed.get(RecservService);
    expect(service).toBeTruthy();
  });
});
