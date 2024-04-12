import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CoursesService } from "./service/courses.service";
import { CourseActions } from "./action-types";
import { concatMap, map } from "rxjs";
import { allCoursesLoaded } from "./course.action";

@Injectable()
export class CoursesEffect {

    loadCourses$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CourseActions.loadAllCourses),
            concatMap(action => this.coursesService.getAll().valueChanges()),
            map(courses => allCoursesLoaded({courses}))
        )
    );

    saveCourses$ = createEffect(
        () => this.actions$.pipe(
            ofType(CourseActions.courseUpdated),
            concatMap(action => this.coursesService.update(
                action.update.id,
                action.update.changes
            ))
        ),
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private coursesService: CoursesService
    ) { }
}