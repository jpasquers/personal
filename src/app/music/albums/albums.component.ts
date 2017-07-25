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
        transform: 'scale(1)'
      })),
      state('hover', style({
        transform: 'scale(1.1)',
      })),
      state('clicked',style({
        transform: 'scale(3)'
      })),
      transition('* => *', animate('100ms ease-in'))
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

}
