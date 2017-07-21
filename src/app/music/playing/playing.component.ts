import { Component, OnInit } from '@angular/core';

import { PlayingService } from './playing.service';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css']
})
export class PlayingComponent implements OnInit {
  playing: any;
  constructor(private playingService: PlayingService) { }

  ngOnInit() {
    this.playingService.getCurrentlyPlaying().subscribe((playing) => {
      console.log(playing.name);
      this.playing = playing.name;
    }, (err) => {
      console.log(err);
    })
  }

}
