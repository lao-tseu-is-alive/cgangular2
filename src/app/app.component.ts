import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CoursesComponent]
})
export class AppComponent {
  title = 'Welcome to my first Angular2 webapp !!!';
  //the_Course:CoursesComponent= new CoursesComponent('Cours Angular 2','CGil');
  constructor(){
  }
}
