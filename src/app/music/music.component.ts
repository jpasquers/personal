import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  navItems: any

  constructor() {
    this.navItems = [{
      link: "/music/playing",
      text: "Currently Playing"
    }, {
      link: "/music/artists",
      text: "My Top Artists"
    },{
      link: "/music/songs",
      text: "My Top Songs"
    }]
  }

  ngOnInit() {
  }

}
