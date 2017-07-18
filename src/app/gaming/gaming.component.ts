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
  heroImageURI: String;
  gameLoaded: boolean;
  heroImageLoaded: boolean;

  constructor(private gamingService: GamingService) { 
    this.mostRecentGame = {};
    this.gameLoaded = false;
    this.heroImageLoaded = false;
    this.heroImageURI = '';
  }

  ngOnInit() {
    this.gamingService.getMostRecentDotaGame().subscribe((resp) =>{
      this.mostRecentGame = resp;
      this.gameLoaded = true;
      this.buildImageURI();
    },(error) => {
      
    })
  }

  buildImageURI() {
    var heroName = this.mostRecentGame.heroName.replace('npc_dota_hero_','');
    this.heroImageURI = "imgs/" + heroName + "_sb.png";
  }

}
