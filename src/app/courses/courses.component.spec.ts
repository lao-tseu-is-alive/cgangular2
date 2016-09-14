/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';
import {CoursesService} from './courses.service';
import {ICourse} from './courses.interface';


describe('Component: Courses', () => {
  it('should create an instance', () => {
    let service = new CoursesService();
    let component = new CoursesComponent(service);
    expect(component).toBeTruthy();
  });
});
