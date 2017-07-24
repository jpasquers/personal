import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { MusicModule } from './music/music.module';
import { TrackModule } from './track/track.module';
import { VertNavModule } from './vert-nav/vert-nav.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GamingComponent } from './gaming/gaming.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { GamingService } from './gaming/gaming.service';
import { FeedbackService } from './feedback/feedback.service';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamingComponent,
    FeedbackComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MusicModule,
    TrackModule,
    AppRoutingModule,
    VertNavModule
  ],
  providers: [GamingService, FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
