import {Injectable} from '@angular/core';
import {ICourse} from './courses.interfaces'

@Injectable()
export class CoursesService {

  get_courses(): ICourse[] {
    return  [
      {
        course_title: "Introduction to Angular 2",
        course_professor: "Angular Master Prof"
      },
      {
        course_title: "Advanced Angular 2",
        course_professor: "Angular Master of the Universe"
      }
    ];
  }


  constructor() {
  }

}
