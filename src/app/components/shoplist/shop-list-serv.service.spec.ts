import { TestBed } from '@angular/core/testing';

import { ShopListServService } from './shop-list-serv.service';

describe('ShopListServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopListServService = TestBed.get(ShopListServService);
    expect(service).toBeTruthy();
  });
});
