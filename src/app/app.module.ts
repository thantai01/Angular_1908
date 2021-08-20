import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingBarComponent } from './navbar/rating-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArtistComponent } from './artist/artist.component';
import { AudiobarComponent } from './audiobar/audiobar.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RatingBarComponent,
    DashboardComponent,
    ArtistComponent,
    AudiobarComponent,
    RegisterFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
