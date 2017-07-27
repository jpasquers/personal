import { Component, OnInit } from '@angular/core';
import {AlbumsService} from './albums.service';
import {Observable} from 'rxjs/Rx';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations: [
    trigger('imgState', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1,
        transform: 'scale(1)',
        'z-index': 0,
        'box-shadow': 'none',
        'transform-origin': 'initial'
      })),
      state('hover', style({
        transform: 'scale(1.1)',
        opacity: 1,
        'z-index': 1,
        'box-shadow': '0 0 20px 10px rgba(0,0,0,0.4)',
        'transform-origin': 'initial'
      })),
      state('clicked',style({
        transform: 'scale(3)',
        'transform-origin': '0 0',
        top: '75px',
        left: '150px',
        opacity: 1,
        'z-index': 2,
        'box-shadow': '0 0 40px 20px rgba(0,0,0,0.6)'
      })),
      transition('hidden => visible', animate('800ms ease-in')),
      transition('visible => hover', animate('250ms ease-in')),
      transition('hover => visible', animate('0ms ease-out')),
      transition('hover => clicked', animate('700ms ease-in')),
      transition('clicked => visible', animate('400ms ease-out'))
    ])
  ]
})
export class AlbumsComponent implements OnInit {
  savedAlbums: any[];
  imgsLoaded: number;
  Math: any;
  albumClicked: boolean;
  constructor(private albumsService: AlbumsService) {
    this.savedAlbums = [];
    this.Math = Math;
    this.imgsLoaded = 0;
    this.albumClicked = false;
   }

  ngOnInit() {
    this.albumsService.getSavedAlbums().subscribe((albums) => {
      console.log(albums);
      this.savedAlbums = albums.map((album, i) => {
        album.state="hidden";
        album.style= {
          'left': ((i % 5)*150) + 'px',
          'top': (Math.floor(i / 5)*150) + 'px'
        }
        return album;
      });
    }, (err) => {
      console.log(err);
    })
  }

  imgLoaded() {
    if (++this.imgsLoaded == this.savedAlbums.length) this.displayImgs();
  }

  displayImgs() {
    var obs = Observable.timer(0,150)
      .take(this.imgsLoaded);
    var observe = obs.subscribe((i) => {
      this.savedAlbums[i].state = "visible"
    })
  }
  
  onImgMouseOver(album) {
    if (album.state == "visible" && !this.albumClicked) album.state="hover";
  }

  onImgMouseLeave(album) {
    if (album.state == "hover" && !this.albumClicked) album.state="visible";
  }

  onImgClick(album) {
    if ((album.state == "visible" || album.state=="hover" && !this.albumClicked)) {
      album.state="clicked";
    }
    else if (album.state == "clicked") {
      album.state = "visible";
    }
  }

  animationStarted($event, i) {
    if ($event.fromState == "clicked" && $event.toState == "visible") {
      $event.element.style.top = (Math.floor(i / 5)*150) + 'px';
      $event.element.style.left = ((i % 5)*150) + 'px';
    }
  }

  animationEnded($event, i) {
    if ($event.fromState == "clicked") {
      this.albumClicked = false;
    }
    else if ($event.toState == "clicked") {
      this.albumClicked = true;
    }
  }

}
