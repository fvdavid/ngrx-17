import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EditCourseDialogComponent } from './edit-course-dialog/edit-course-dialog.component';

import { environment } from '../../environments/environment';
import { CoursesService } from './service/courses.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { coursesReducer } from './reducers/course.reducers';
import { CoursesEffect } from './courses.effects';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { CoursesResolver } from './courses.resolver';

@NgModule({
  declarations: [
    HomeComponent,
    CourseComponent,
    EditCourseDialogComponent,
    CoursesCardListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,

    // MatFormFieldModule,
    // MatDialogTitle,
    // MatDialogContent,
    // MatDialogActions,
    // MatDialogClose,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,

    EffectsModule.forFeature([CoursesEffect]),
    StoreModule.forFeature("courses", coursesReducer)
  ],
  exports: [
    EditCourseDialogComponent
  ],
  providers: [
    CoursesService,
    // CoursesResolver
  ]
})
export class CoursesModule { }
