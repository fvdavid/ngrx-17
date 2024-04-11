import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BerandaComponent } from './beranda/beranda.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    BerandaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"silvermist-rss","appId":"1:55504318878:web:2100d69201882de0cc268f","storageBucket":"silvermist-rss.appspot.com","apiKey":"AIzaSyCpwon6_DHF5XQP_G0t_sdHoQr2ZR6VXuE","authDomain":"silvermist-rss.firebaseapp.com","messagingSenderId":"55504318878"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
