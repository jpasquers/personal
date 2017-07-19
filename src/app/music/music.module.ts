import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music.component';
import { PlayingComponent } from './playing/playing.component';
import { ArtistsComponent } from './artists/artists.component';
import { SongsComponent } from './songs/songs.component';

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
    MusicRoutingModule
  ],
  providers: []
})
export class MusicModule { }