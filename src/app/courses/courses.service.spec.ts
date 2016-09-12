/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { CoursesService } from './courses.service';

describe('Service: Courses', () => {
  beforeEach(() => {
    addProviders([CoursesService]);
  });

  it('should ...',
    inject([CoursesService],
      (service: CoursesService) => {
        expect(service).toBeTruthy();
      }));
});
