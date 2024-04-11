import { TestBed } from '@angular/core/testing';

import { CoursesHttpService } from './courses-http.service';

describe('CoursesHttpService', () => {
  let service: CoursesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
