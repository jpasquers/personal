import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vert-nav',
  templateUrl: './vert-nav.component.html',
  styleUrls: ['./vert-nav.component.css']
})
export class VertNavComponent implements OnInit {

  @Input()
  items;


  constructor() { }

  ngOnInit() {
  }

}
