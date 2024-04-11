import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Course } from '../model/course';

@Injectable()
export class CoursesService {

  private dbPath = '/courses';

  coursesRef: AngularFirestoreCollection<Course>;

  constructor(private db: AngularFirestore) {
    this.coursesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Course> {
    return this.coursesRef;
  }

  create(tutorial: Course): any {
    return this.coursesRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.coursesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.coursesRef.doc(id).delete();
  }

}
