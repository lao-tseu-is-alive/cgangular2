/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AuthorsService } from './authors.service';

describe('Service: Authors', () => {
  beforeEach(() => {
    addProviders([AuthorsService]);
  });

  it('should ...',
    inject([AuthorsService],
      (service: AuthorsService) => {
        expect(service).toBeTruthy();
      }));
});
