import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingBarComponent } from './navbar/rating-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArtistComponent } from './artist/artist.component';
import { AudiobarComponent } from './audiobar/audiobar.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingBarComponent,
    DashboardComponent,
    ArtistComponent,
    AudiobarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
