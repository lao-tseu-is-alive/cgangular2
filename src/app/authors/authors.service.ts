import { Injectable } from '@angular/core';
import {IAuthor} from './authors.interface';

@Injectable()
export class AuthorsService {

  getAuthors(): IAuthor[] {
    return [
      {
        first_name: "Carlos",
        last_name: "Gil"
      },
      {
        first_name: "Christian",
        last_name: "Naegele"
      }
    ];
  }

  constructor() {
  }

}
