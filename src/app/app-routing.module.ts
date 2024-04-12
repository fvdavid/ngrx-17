import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerandaComponent } from './beranda/beranda.component';

const routes: Routes = [
  {
    path: '',
    component: BerandaComponent
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(c => c.CoursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
