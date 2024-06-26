import {ChangeDetectionStrategy, Component, inject, model} from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,  
} from '@angular/forms';
import {ErrorStateMatcher, provideNativeDateAdapter} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { Studentsinterface } from './studentsinterface';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-students',
  standalone: true,
  providers:[provideNativeDateAdapter()],
  imports:[MatSlideToggle,
           MatSlideToggleModule, 
          FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDatepickerModule,MatSelectModule,
          MatButtonModule,MatIconModule, MatCardModule
           ],
  templateUrl: './students.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './students.component.css'
})

export class StudentsComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  selectFormControl!: FormControl<any>;

}

