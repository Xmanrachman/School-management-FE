import { Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentsComponent } from './students/students.component';
import { GridStudentsComponent } from './students/grid-students/grid-students.component';

export const routes: Routes = [
  {
    path: 'students-page',
    component: StudentsComponent,
    //loadChildren:()=>import('./students/students.component').then(m=>m.StudentsComponent),
    title: 'Mahasiswa Page',
  },
  {
    path: 'grid-students-page',
    component: GridStudentsComponent,
    title: 'List of Students',
  },
  {
    path: 'teacher-page',
    component: TeacherComponent,
    //loadChildren:()=>import('./teacher/teacher.component').then(m=>m.TeacherComponent),
    title: 'Guru Page',
  },
];

export default routes;
