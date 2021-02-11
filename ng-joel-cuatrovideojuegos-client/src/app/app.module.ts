import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import for loading & configuring in-memory web api
 //import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { videogameItemComponent } from './videogame-item/videogame-item.component';
import { videogameDetailComponent } from './videogame-detail/videogame-detail.component';
import { videogameService } from './shared/videogame.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { videogameEditComponent } from './videogame-edit/videogame-edit.component';
import { videogameData } from './shared/videogame-data';
import { HttpClientModule } from '@angular/common/http';
import { videogameNewComponent } from './videogame-new/videogame-new.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    videogameItemComponent,
    videogameDetailComponent,
    videogameEditComponent,
    videogameNewComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
   // InMemoryWebApiModule.forRoot(videogameData)
  ],
  providers: [videogameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
