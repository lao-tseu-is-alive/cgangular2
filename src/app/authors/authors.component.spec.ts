/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { AuthorsComponent } from './authors.component';

describe('Component: Authors', () => {
  it('should create an instance', () => {
    let component = new AuthorsComponent();
    expect(component).toBeTruthy();
  });
});
