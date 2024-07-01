import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  inject,
  model,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from '../teacher.component';
import { GridTeacherInterface } from './grid-teacher-interface';
import path from 'node:path';

@Component({
  selector: 'app-grid-teacher',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    CommonModule,
  ],
  templateUrl: './grid-teacher.component.html',
  styleUrl: './grid-teacher.component.css',
})
export class GridTeacherComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'idStudent',
    'firstName',
    'lastName',
    'nim',
    'gender',
    'placeOfBirth',
    'dateOfBirth',
    'age',
    'email',
    'Add',
  ];
  dataSource = new MatTableDataSource<GridTeacherInterface>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /** Control for the selected step for pannel
   * @returns {number}
   */
  step = signal(0);
  setStep(index: number) {
    this.step.set(index);
  }

  /** Control for the selected animal and dialog function. */
  readonly animal = signal('');
  readonly firstName = model('');
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(TeacherComponent, {
      data: { firstName: this.firstName(), animal: this.animal() },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }

  /**
   * Function logic if to show or not the form and table
   */
  idDivListTeacher: boolean = true;
  idDivFormTeachers: boolean = false;
  addStudent() {
    if (this.idDivListTeacher === true) {
      console.log('masuk true');
      this.idDivListTeacher = false;
      this.idDivFormTeachers = true;
      path;

      return this.idDivFormTeachers;
    } else {
      console.log('masuk false');
      this.idDivListTeacher = true;
      this.idDivFormTeachers = false;
    }
    return this.idDivListTeacher;
  }
}

/** Data dummy for table */
const ELEMENT_DATA: GridTeacherInterface[] = [
  {
    idStudent: 1,
    firstName: 'Hydrogen',
    lastName: 'Hakim',
    nim: '001',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-01'),
    age: 17,
    email: 's7s9H@example.com',
    add: '1',
  },
  {
    idStudent: 2,
    firstName: 'Helium',
    lastName: 'Hakim',
    nim: '002',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim@example.com',
    add: '2',
  },
  {
    idStudent: 3,
    firstName: 'Lithium',
    lastName: 'Hakim',
    nim: '002',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim@example.com',
    add: '3',
  },
  {
    idStudent: 4,
    firstName: 'Beryllium',
    lastName: 'Rachman',
    nim: '003',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-03'),
    age: 16,
    email: 'hakim2@example.com',
    add: '4',
  },
  {
    idStudent: 5,
    firstName: 'Boron',
    lastName: 'Hakim',
    nim: '002',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim4@example.com',
    add: '5',
  },
  {
    idStudent: 6,
    firstName: 'Carbon',
    lastName: 'Hakim',
    nim: '003',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim5@example.com',
    add: '6',
  },
  {
    idStudent: 7,
    firstName: 'Nitrogen',
    lastName: 'Mandra',
    nim: '004',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim@example.com',
    add: '7',
  },
  {
    idStudent: 8,
    firstName: 'Oxygen',
    lastName: 'Hakim',
    nim: '005',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim5@example.com',
    add: '8',
  },
  {
    idStudent: 9,
    firstName: 'Fluorine',
    lastName: 'Hakim',
    nim: '0026',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim6@example.com',
    add: '9',
  },
  {
    idStudent: 10,
    firstName: 'Neon',
    lastName: 'Hakim',
    nim: '002',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim@example.com',
    add: '10',
  },
  {
    idStudent: 11,
    firstName: 'Sodium',
    lastName: 'Hakim',
    nim: '002',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim@example.com',
    add: '11',
  },
  {
    idStudent: 12,
    firstName: 'Magnesium',
    lastName: 'Hakim',
    nim: '002',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim@example.com',
    add: '12',
  },
  {
    idStudent: 13,
    firstName: 'Aluminum',
    lastName: 'Hakim',
    nim: '002',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim@example.com',
    add: '13',
  },
  {
    idStudent: 14,
    firstName: 'Silicon',
    lastName: 'Hakim',
    nim: '002',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim@example.com',
    add: '14',
  },
  {
    idStudent: 15,
    firstName: 'Phosphorus',
    lastName: 'Hakim',
    nim: '002',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim@example.com',
    add: '15',
  },
  {
    idStudent: 16,
    firstName: 'Sulfur',
    lastName: 'Hakim',
    nim: '002',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim16@example.com',
    add: '16',
  },
  {
    idStudent: 17,
    firstName: 'Chlorine',
    lastName: 'Hakim',
    nim: '002',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim17@example.com',
    add: '17',
  },
  {
    idStudent: 18,
    firstName: 'Argon',
    lastName: 'Hakim',
    nim: '002',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim18@example.com',
    add: '18',
  },
  {
    idStudent: 19,
    firstName: 'Potassium',
    lastName: 'Hakim',
    nim: '002',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim@example.com',
    add: '2',
  },
  {
    idStudent: 20,
    firstName: 'Calcium',
    lastName: 'Hakim',
    nim: '002',
    gender: 'Male',
    placeOfBirth: 'Jakarta',
    dateOfBirth: new Date('2000-01-02'),
    age: 16,
    email: 'hakim@example.com',
    add: '2',
  },
];
