import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  musicNavItems: any

  constructor() {
    this.musicNavItems = [{
      link: "/music/playing",
      text: "Currently Playing"
    }, {
      link: "/music/albums",
      text: "My Saved Albums"
    },{
      link: "/music/songs",
      text: "My Top Songs"
    }]
  }

  ngOnInit() {
  }

}
