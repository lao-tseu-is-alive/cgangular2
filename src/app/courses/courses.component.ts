import {Component, OnInit} from '@angular/core';

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
export class CoursesComponent implements OnInit {
  public course_title: string = "Introduction to Angular 2";
  public course_professor: string = "Angular Master";

  public arr_courses: ICourse[] = [
    { course_title: "Introduction to Angular 2",
      course_professor: "Angular Master Prof"  },
    { course_title: "Advanced Angular 2",
      course_professor: "Angular Master of the Universe"  }
    ];


  /*
   constructor(new_course_title:string, new_course_professor:string){
   this.course_title =new_course_title;
   this.course_professor= new_course_professor;
   }
   */
  ngOnInit() {
  }

}
