import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesHttpService {

  // private baseUrl = "/api";

  // constructor(private http: HttpClient) { }

  // findAllCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>(this.baseUrl);
  // }

  // findCourseById(courseId: number): Observable<Course> {
  //   return this.http.get<Course>(`/api/${courseId}`);
  // }
}
