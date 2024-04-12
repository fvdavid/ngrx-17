import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable, filter, finalize, first, tap } from "rxjs";
import { loadAllCourses } from "./course.action";
import { AppState } from "../reducers";
import { Course } from "./model/course";
import { areCoursesLoaded } from "./courses.selectors";

// @Injectable()
// export class CoursesResolver implements Resolve<any> {
//     loading = false;
//     constructor(private store: Store<AppState>) { }
//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
//         return this.store.pipe(
//             tap(() => {
//                 if (!this.loading) {
//                     this.loading = true;
//                     this.store.dispatch(loadAllCourses());
//                 }
//             }),
//             first(),
//             finalize(() => this.loading = false)
//         );
//     }
// }

export const coursesResolver: ResolveFn<any> = (route, state) => {

    let loading = false;
    let store = inject(Store<AppState>);

    return store.pipe(
        select(areCoursesLoaded),
        tap(coursesLoaded => {
            if (!loading && !coursesLoaded) {
                loading = true;
                store.dispatch(loadAllCourses());
            }
        }),
        filter(coursesLoaded => coursesLoaded),
        first(),
        finalize(() => loading = false)
    )
};
