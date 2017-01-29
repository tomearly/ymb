/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AboutmeService } from './aboutme.service';

describe('AboutmeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutmeService]
    });
  });

  it('should ...', inject([AboutmeService], (service: AboutmeService) => {
    expect(service).toBeTruthy();
  }));
});
