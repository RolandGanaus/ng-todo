import { TestBed } from '@angular/core/testing';

import { TodoClientService } from './todo-client.service';

describe('TodoClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoClientService = TestBed.get(TodoClientService);
    expect(service).toBeTruthy();
  });
});
