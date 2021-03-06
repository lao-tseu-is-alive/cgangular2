import { Component, OnInit } from '@angular/core';
import {AuthorsService} from './authors.service';
import {IAuthor} from './authors.interface';
import {StarsComponent} from '../stars/stars.component';

@Component({
  moduleId: module.id,
  selector: 'app-authors',
  templateUrl: 'authors.component.html',
  styleUrls: ['authors.component.css'],
  providers: [AuthorsService],
  directives: [StarsComponent]
})
export class AuthorsComponent implements OnInit {

  public arr_authors: IAuthor[];

  constructor(authorService: AuthorsService) {
    this.arr_authors = authorService.getAuthors();
  }

  ngOnInit() {
  }

}
