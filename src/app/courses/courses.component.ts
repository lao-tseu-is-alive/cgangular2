import { Component, OnInit } from '@angular/core';

interface ICourse {
  course_title: string;
  course_professor?: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-courses',
  templateUrl: 'courses.component.html',
  styleUrls: ['courses.component.css']
})
export class CoursesComponent implements OnInit,ICourse {
  public course_title: string = "Introduction to Angular 2";
  public course_professor:string = "Angular Master";


/*
  constructor(new_course_title:string, new_course_professor:string){
    this.course_title =new_course_title;
    this.course_professor= new_course_professor;
  }
*/
  ngOnInit() {
  }

}
