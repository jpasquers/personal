import { Component, OnInit } from '@angular/core';
import {ArtistsService} from './artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  topArtists: any[];
  constructor(private artistsService: ArtistsService) {
    this.topArtists = [];
   }

  ngOnInit() {
    this.artistsService.getTopArtists().subscribe((artists) => {
      this.topArtists = artists;
    }, (err) => {
      console.log(err);
    })
  }

}
