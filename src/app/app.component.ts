import { Component, NgModule } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentsComponent } from './students/students.component';
import { TeacherComponent } from './teacher/teacher.component';
import { RouterModule } from '@angular/router';
import { GridStudentsComponent } from './students/grid-students/grid-students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[StudentsComponent,TeacherComponent, GridStudentsComponent, RouterModule],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'school-management-FE';
  constructor(private modalService:NgbModal) {

  }
  public open(modal:any):void {
    this.modalService.open(modal);
  }
}
