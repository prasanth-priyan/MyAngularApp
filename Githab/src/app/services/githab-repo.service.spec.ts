import { TestBed } from '@angular/core/testing';

import { GithabRepoService } from './githab-repo.service';

describe('GithabRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithabRepoService = TestBed.get(GithabRepoService);
    expect(service).toBeTruthy();
  });
});
