import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { TrackRoutingModule } from './track-routing.module';
import { VertNavModule } from '../vert-nav/vert-nav.module';

import { MyJourneyComponent } from './my-journey/my-journey.component';
import { StefanHolmComponent } from './stefan-holm/stefan-holm.component';
import { MutazBarshimComponent } from './mutaz-barshim/mutaz-barshim.component';
import { TrackComponent } from './track.component';



@NgModule({
  declarations: [TrackComponent, MyJourneyComponent, StefanHolmComponent, MutazBarshimComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TrackRoutingModule,
    VertNavModule
  ],
  providers: []
})
export class TrackModule { }