
import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { StudentsComponent } from '../students.component';




@Component({
  selector: 'app-grid-students',
  standalone: true,
  imports:  [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './grid-students.component.html',
  styleUrl: './grid-students.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridStudentsComponent {

  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentsComponent, {
      data: {name: this.name(), animal: this.animal()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }

}


