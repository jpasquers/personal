import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { MusicModule } from './music/music.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrackComponent } from './track/track.component';
import { GamingComponent } from './gaming/gaming.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { GamingService } from './gaming/gaming.service';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackComponent,
    GamingComponent,
    FeedbackComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MusicModule
  ],
  providers: [GamingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
