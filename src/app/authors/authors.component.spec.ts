/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { AuthorsComponent } from './authors.component';
import {AuthorsService} from './authors.service';

describe('Component: Authors', () => {
  it('should create an instance', () => {
    let service = new AuthorsService();
    let component = new AuthorsComponent(service);
    expect(component).toBeTruthy();
  });
});
