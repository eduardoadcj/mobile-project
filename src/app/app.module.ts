import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ContatoService } from './service/contato.service';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBg4Pf9TXUIgG18_jlLSa6fb2J29OgyMXg",
      authDomain: "mobile-project-186ad.firebaseapp.com",
      databaseURL: "https://mobile-project-186ad.firebaseio.com",
      projectId: "mobile-project-186ad",
      storageBucket: "mobile-project-186ad.appspot.com",
      messagingSenderId: "840855502560",
      appId: "1:840855502560:web:6b288ed4498644f0"
    }),
     AngularFireDatabaseModule
   ],
  providers: [
    ContatoService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
