import { TestBed } from '@angular/core/testing';

import { RepoDataService } from './repo-data.service';

describe('RepoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepoDataService = TestBed.get(RepoDataService);
    expect(service).toBeTruthy();
  });
});
