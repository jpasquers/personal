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
        top: '25px',
        left: '25px',
        opacity: 1,
        'z-index': 2,
        'box-shadow': '0 0 20px 10px rgba(0,0,0,0.4)'
      })),
      transition('hidden => visible', animate('800ms ease-in')),
      transition('visible => hover', animate('150ms ease-in')),
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
  constructor(private albumsService: AlbumsService) {
    this.savedAlbums = [];
    this.Math = Math;
    this.imgsLoaded = 0;
   }

  ngOnInit() {
    this.albumsService.getSavedAlbums().subscribe((albums) => {
      console.log(albums);
      this.savedAlbums = albums.map((album) => {
        album.state="hidden";
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
    if (album.state == "visible") album.state="hover";
  }

  onImgMouseLeave(album) {
    if (album.state == "hover") album.state="visible";
  }

  onImgClick(album) {
    if (album.state == "visible" || album.state=="hover") {
      album.state="clicked";
    }
    else if (album.state == "clicked") {
      album.state = "visible";
    }
  }

}
