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

  constructor(private gamingService: GamingService) { 
    this.mostRecentGame = {};
  }

  ngOnInit() {
    this.gamingService.getMostRecentDotaGame().subscribe((resp) =>{
      this.mostRecentGame = resp;
    },(error) => {
    })
  }

}
