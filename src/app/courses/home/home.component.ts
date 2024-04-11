import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseDialogComponent } from '../edit-course-dialog/edit-course-dialog.component';
import { defaultDialogConfig } from '../shared/default-dialog-config';
import { CoursesService } from '../service/courses.service';
import { map } from 'rxjs/operators';
import { Course, compareCourses } from '../model/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  loading$!: Observable<boolean>;
  allCourse$!: Observable<Course[]>;
  promoTotal$!: Observable<number>;
  beginnerCourses$!: Observable<Course[]>;
  advancedCourses$!: Observable<Course[]>;

  constructor(private dialog: MatDialog,
    private coursesService: CoursesService
  ) {
    this.reload();
  }

  reload() {
    this.allCourse$ = this.coursesService.getAll().valueChanges();

    this.loading$ = this.allCourse$.pipe(map(courses => !!courses));

    this.beginnerCourses$ = this.allCourse$.pipe(
      map(f => f.filter(v => v.category == 'BEGINNER'))
    );

    this.advancedCourses$ = this.allCourse$.pipe(
      map(f => f.filter(v => v.category == 'ADVANCED'))
    );

    this.promoTotal$ = this.allCourse$.pipe(
      map(c => c.filter(c => c.promo).length)
    );
  }

  onAddCourse() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: "Create Course",
      mode: 'create'
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig);
  }
}
