import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BerandaComponent } from './beranda/beranda.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BerandaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideFirestore(() => getFirestore())
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
