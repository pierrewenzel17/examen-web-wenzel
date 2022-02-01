import { TestBed } from '@angular/core/testing';

import { MusiqueDetailResolver } from './musique-detail.resolver';

describe('MusiqueDetailResolver', () => {
  let resolver: MusiqueDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MusiqueDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
