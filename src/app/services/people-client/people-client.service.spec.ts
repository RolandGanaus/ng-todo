import { TestBed } from '@angular/core/testing';

import { PeopleClientService } from './people-client.service';

describe('PeopleClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleClientService = TestBed.get(PeopleClientService);
    expect(service).toBeTruthy();
  });
});
