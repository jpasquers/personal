import { Component, OnInit } from '@angular/core';

import { PlayingService } from './playing.service';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css']
})
export class PlayingComponent implements OnInit {
  songName: String;
  constructor(private playingService: PlayingService) { }

  ngOnInit() {
    this.playingService.getCurrentlyPlaying().subscribe((playing) => {
      console.log(playing.name);
      this.songName = playing.name;
    }, (err) => {
      console.log(err);
    })
  }

}
