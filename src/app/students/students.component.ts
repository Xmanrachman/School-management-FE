import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  signal,
} from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  ErrorStateMatcher,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { Studentsinterface } from './studentsinterface';
import { NavigationEnd, Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-students',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatSlideToggle,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
  ],
  templateUrl: './students.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: '../form.component.css',
})
export class StudentsComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
  selectFormControl!: FormControl<any>;

  /**
   * Control for the selected step for pannel
   * @returns {number}
   */
  step = signal(0);
  setStep(index: number) {
    this.step.set(index);
  }

  idDivListStudents: boolean = true;
  idDivFormStudents: boolean = false;
  constructor(private routerInject: Router) {
    this.routerInject.events.subscribe((val) => {});
  }

  resetForm() {
    this.idDivListStudents = true;
    this.idDivFormStudents = false;
    this.routerInject.navigate(['grid-students-page']);
  }

  submitForm() {
    //dialog succesfly saving
    //post to api use json format
  }
}
