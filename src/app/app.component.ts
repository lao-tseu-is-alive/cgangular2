import {Component} from '@angular/core';
import {CoursesComponent} from './courses/courses.component';
import {AuthorsComponent} from './authors/authors.component';
//import  {IStudent} from './app.student.interface';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
  title = 'Welcome to my first Angular2 webapp !!';
  //student:IStudent = {first_name:'#Unknown#', last_name:'#unknown#'};
  student_name = "";
  constructor() {
  }
}
