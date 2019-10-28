import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { DestinationsComponent } from './destinations/destinations.component';


// FIREBASE STUFF COMES HERE
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { DestinationsListComponent } from './destinations-list/destinations-list.component';

import { DestinationsService } from "./shared/destinations.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    BlogComponent,
    DestinationsComponent,
    DestinationsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),// we called initializeApp function to provide connection details
    AngularFireDatabaseModule // we will import the classes here too
  ],
  providers: [DestinationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
