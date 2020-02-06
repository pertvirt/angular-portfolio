import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AdminModule} from './admin/admin.module';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAUZsmcna5K_PSgX05YHUYZg9bd3hBLDGg',
  authDomain: 'angular-portfolio-9d0d9.firebaseapp.com',
  databaseURL: 'https://angular-portfolio-9d0d9.firebaseio.com',
  projectId: 'angular-portfolio-9d0d9',
  storageBucket: 'angular-portfolio-9d0d9.appspot.com',
  messagingSenderId: '889380303337',
  appId: '1:889380303337:web:515770c67ea64329005b78',
  measurementId: 'G-J0Y8FYRY31'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
