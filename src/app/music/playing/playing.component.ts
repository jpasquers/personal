import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


import { PlayingService } from './playing.service';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css']
})
export class PlayingComponent implements OnInit {
  playing: any;
  embedBaseURI: String ;
  widgetURI: SafeResourceUrl;

  constructor(private playingService: PlayingService, private sanitizer: DomSanitizer) {
    this.playing = {};
    this.embedBaseURI = "https://open.spotify.com/embed?";
  }

  ngOnInit() {
    this.playingService.getCurrentlyPlaying().subscribe((playing) => {
      console.log(playing);
      this.playing = playing;
      this.widgetURI = this.sanitizer.bypassSecurityTrustResourceUrl(this.embedBaseURI + this.playing.uri);
    }, (err) => {
      console.log(err);
    })
  }

}
