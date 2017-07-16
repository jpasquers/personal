import { Component, OnInit } from '@angular/core';
import { GamingService } from './gaming.service';
import { DotaGame } from './dota-game';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css']
})
export class GamingComponent implements OnInit {
  previousGames: [];

  constructor(private gamingService: GamingService) { 
    this.previousGames = [];
  }

  ngOnInit() {
    this.gamingService.getDotaHistory().subscribe((games) =>{
      this.previousGames = games;
    },(error) => {

    })
  }

}
