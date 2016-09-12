import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../courses.service';
import {ICourse} from '../courses.interfaces';

@Component({
  moduleId: module.id,
  selector: 'app-courses',
  templateUrl: 'courses.component.html',
  styleUrls: ['courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
  public course_title: string = "Introduction to Angular 2";
  public course_professor: string = "Angular Master";
  public arr_courses: ICourse[];


   constructor(courseService: CoursesService){
     this.arr_courses= courseService.get_courses();
   }

  ngOnInit() {
  }

}
