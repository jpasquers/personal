import { Component, OnInit } from '@angular/core';
import { GamingService } from './gaming.service';
import { DotaGame } from './dota-game';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css']
})
export class GamingComponent implements OnInit {
  mostRecentGame: any;
  gameLoaded: boolean;
  heroImageLoaded: boolean;
  heroImageURI: String;

  constructor(private gamingService: GamingService) { 
    this.mostRecentGame = {};
    this.gameLoaded = false;
    this.heroImageLoaded = false;
    this.heroImageURI = "";
  }

  ngOnInit() {
    this.gamingService.getMostRecentDotaGame().subscribe((resp) =>{
      this.mostRecentGame = resp;
      this.gameLoaded = true;
      this.buildHeroImageURI();
    },(error) => {
    })
  }

  buildHeroImageURI() {
    //build img string
  }

}
