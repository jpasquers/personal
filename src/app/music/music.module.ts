import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { MusicRoutingModule } from './music-routing.module';
import { VertNavModule } from '../vert-nav/vert-nav.module';

import { MusicComponent } from './music.component';
import { PlayingComponent } from './playing/playing.component';
import { ArtistsComponent } from './artists/artists.component';
import { SongsComponent } from './songs/songs.component';

import { PlayingService } from './playing/playing.service';
import { ArtistsService } from './artists/artists.service';

@NgModule({
  declarations: [
    PlayingComponent,
    ArtistsComponent,
    SongsComponent,
    MusicComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MusicRoutingModule,
    VertNavModule
  ],
  providers: [PlayingService, ArtistsService]
})
export class MusicModule { }