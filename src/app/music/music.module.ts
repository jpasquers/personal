import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MusicRoutingModule } from './music-routing.module';
import { VertNavModule } from '../vert-nav/vert-nav.module';

import { MusicComponent } from './music.component';
import { PlayingComponent } from './playing/playing.component';
import { AlbumsComponent } from './albums/albums.component';
import { SongsComponent } from './songs/songs.component';

import { PlayingService } from './playing/playing.service';
import { AlbumsService } from './albums/albums.service';

@NgModule({
  declarations: [
    PlayingComponent,
    AlbumsComponent,
    SongsComponent,
    MusicComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MusicRoutingModule,
    VertNavModule
  ],
  providers: [PlayingService, AlbumsService]
})
export class MusicModule { }