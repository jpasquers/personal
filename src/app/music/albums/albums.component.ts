import { Component, OnInit } from '@angular/core';
import {AlbumsService} from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  savedAlbums: any[];
  Math: any;
  constructor(private albumsService: AlbumsService) {
    this.savedAlbums = [];
    this.Math = Math;
   }

  ngOnInit() {
    this.albumsService.getSavedAlbums().subscribe((albums) => {
      console.log(albums);
      this.savedAlbums = albums;
    }, (err) => {
      console.log(err);
    })
  }

}
