import { TestBed } from '@angular/core/testing';

import { GithabSearchService } from './githab-search.service';

describe('GithabSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithabSearchService = TestBed.get(GithabSearchService);
    expect(service).toBeTruthy();
  });
});
