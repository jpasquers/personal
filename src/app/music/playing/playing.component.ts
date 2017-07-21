import { Component, OnInit } from '@angular/core';

import { PlayingService } from './playing.service';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css']
})
export class PlayingComponent implements OnInit {
  playing: String;
  constructor(private playingService: PlayingService) { }

  ngOnInit() {
    this.playingService.getCurrentlyPlaying().subscribe((playing) => {
      console.log(playing);
      this.playing = playing;
    }, (err) => {

    })
  }

}
