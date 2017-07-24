import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  trackNavItems: any;

  constructor() {
    this.trackNavItems = [{
      link: "/track/my-journey",
      text: "My Journey"
    }, {
      link: "/track/mutaz-barshim",
      text: "Mutaz Barshim"
    }, {
      link: "/track/stefan-holm",
      text: "Stefan Holm"
    }]
   }

  ngOnInit() {
  }

}
