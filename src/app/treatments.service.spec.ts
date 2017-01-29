/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TreatmentsService } from './treatments.service';

describe('TreatmentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreatmentsService]
    });
  });

  it('should ...', inject([TreatmentsService], (service: TreatmentsService) => {
    expect(service).toBeTruthy();
  }));
});
